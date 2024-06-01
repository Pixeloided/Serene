import { ensureOpen, redis } from '$lib/redis';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	await ensureOpen();
	const { slug } = await request.json();
	console.log('publishing: ', slug);
	await redis.set(`content:${slug}:published`, 'true');
	return json({ status: 'success' });
};
