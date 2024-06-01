import 'dotenv/config';
import { put } from '@vercel/blob';
import { error, redirect } from '@sveltejs/kit';
import { ensureOpen, redis } from '$lib/redis.js';

/** @type {import('./$types').Actions} */
export const actions = {
	finalize: async ({ request }) => {
		await ensureOpen();
		const data: FormData = await request.formData();
		let id: string = '';

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

		id =
			String.fromCharCode(97 + Math.floor(Math.random() * 26)) +
			String.fromCharCode(97 + Math.floor(Math.random() * 26));
		while (await redis.get(`content:${id}:published`)) {
			id =
				String.fromCharCode(97 + Math.floor(Math.random() * 26)) +
				String.fromCharCode(97 + Math.floor(Math.random() * 26));
		}

		// Set the data
		await redis.set(`content:${id}:published`, 'false');
		for (const key of data.keys()) {
			await redis.set(`content:${id}:${key}`, data.get(key) as string);
		}

		// Image content type exclusive - text content is automatically handled above.
		if (data.get('content-type') == 'image') {
			const file = data.get('file') as File;
			if (!file) {
				throw error(400, { message: 'No file provided to upload. Whoops!' });
			}
			const { downloadUrl } = await put(id as string, file, { access: 'public' });
			await redis.set(`content:${id}:content`, downloadUrl);
		}

		const unpublishedContentKey = generateUUID();

		await redis.set(`content:${id}:unpublished-key`, unpublishedContentKey, { EX: 86400 });
		await redis.set(`content:${id}:date`, new Date().toDateString());

		await redis.lPush('all', id);
		await redis.zAdd('views', { score: 0, value: id });

		return redirect(302, `/master/p/${id}`);
	}
};
