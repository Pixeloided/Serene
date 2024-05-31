import 'dotenv/config';
import { put } from '@vercel/blob';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	finalize: async ({ request }) => {
		const data: FormData = await request.formData();
		const uploader = createClient({
			url: process.env.KV_REST_API_URL,
			token: process.env.KV_REST_API_TOKEN
		});
		let id;
		let exists: boolean | null = true;

		function generateUUID() {
			let res = '';
			for (let i = 0; i < 48; i++) {
				if (Math.random() < 0.33) {
					res += String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase();
					continue;
				}
				if (Math.random() > 0.66) {
					res += Math.floor(Math.random() * 10);
					continue;
				}
				res += String.fromCharCode(97 + Math.floor(Math.random() * 26));
			}
			return res;
		}

		while (exists) {
			id =
				String.fromCharCode(97 + Math.floor(Math.random() * 26)) +
				String.fromCharCode(97 + Math.floor(Math.random() * 26));
			exists = await uploader.get(id);
			if (!exists) break;
		}

		// Set the data
		await uploader.set(`content:${id}:published`, false);
		for (const key of data.keys()) {
			await uploader.set(`content:${id}:${key}`, data.get(key) as string);
		}

		// Image content type exclusive - text content is automatically handled above.
		if (data.get('content-type') == 'image') {
			const file = data.get('file') as File;
			if (!file) {
				throw error(400, { message: 'No file provided to upload. Whoops!' });
			}
			const { downloadUrl } = await put(id as string, file, { access: 'public' });
			await uploader.set(`content:${id}:content`, downloadUrl);
		}

		const unpublishedContentKey = generateUUID();

		await uploader.set(`content:${id}:unpublished-key`, unpublishedContentKey, { ex: 86400 });
		await uploader.set(`content:${id}:date`, new Date().toDateString());

		await uploader.lpush('all', id);
		await uploader.zadd('views', { member: id, score: 0 });

		return redirect(303, `/master/p/${id}`);
	}
};
