import 'dotenv/config';
import { createClient } from '@vercel/kv';
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

		while (exists) {
			id =
				String.fromCharCode(97 + Math.floor(Math.random() * 26)) +
				String.fromCharCode(97 + Math.floor(Math.random() * 26));
			exists = await uploader.get(id);
			if (!exists) break;
		}

		// Set the data
		await uploader.set(id + ':published', false);
		for (const key of data.keys()) {
			await uploader.set(id + ':' + key, data.get(key) as string);
		}

		// Image content type exclusive - text content is automatically handled above.
		if (data.get('content-type') == 'image') {
			const file = data.get('file') as File;
			if (!file) {
				throw error(400, { message: 'No file provided to upload. Whoops!' });
			}
			const { downloadUrl } = await put(id as string, file, { access: 'public' });
			await uploader.set(id + ':content', downloadUrl);
		}

		await uploader.lpush('all', id);

		return redirect(303, '/master/preview/' + id);
	}
};
