import 'dotenv/config';
import { redirect } from '@sveltejs/kit';
import { redis } from '$lib/redis';
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const params = url.searchParams;
	await redis.lrange('all', 0, -1).then(async (res) => {
		if (params.get('excl') !== null) {
			res.splice(res.indexOf(params.get('excl')!), 1);
		}
		let res_f = res[Math.floor(Math.random() * res.length)];
		while ((await redis.get(`content:${res_f}:published`)) !== 'true') {
			res_f = res[Math.floor(Math.random() * res.length)];
		}
		return redirect(303, `/p/${res_f}?sel=random`);
	});
}

export const ssr = true;
