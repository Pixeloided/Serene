import 'dotenv/config';
import { createClient } from '@vercel/kv';
import { redirect } from '@sveltejs/kit';
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = createClient({
		url: process.env.KV_REST_API_URL,
		token: process.env.KV_REST_API_TOKEN
	});
	await client.lrange('all', 0, -1).then(async (res) => {
		let res_f = res[Math.floor(Math.random() * res.length)];
		while ((await client.get(res_f + ':published')) == false) {
			res_f = res[Math.floor(Math.random() * res.length)];
		}
		return redirect(303, `/p/${res_f}?sel=random`);
	});
}

export const ssr = true;
