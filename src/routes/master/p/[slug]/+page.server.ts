import 'dotenv/config';
import { error, redirect } from '@sveltejs/kit';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align';
import type { JSONContent } from '@tiptap/core';
import { ensureOpen, redis } from '$lib/redis.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	await ensureOpen();
	const id = params.slug;
	if (await redis.get(`content:${id}:published`) == 'true') return redirect(302, `/p/${id}`);
	let content: string | undefined | null = undefined;
	switch (await redis.get(`content:${id}:content-type`)) {
		case 'text':
			// console.log(await client.get(params.slug + ':content'));
			content = generateHTML(
				JSON.parse((await redis.get(`content:${id}:content`)) as string) as JSONContent,
				[StarterKit, Typography, TextAlign]
			);
			break;
		case 'image':
			content = await redis.get(`content:${id}:content`);
			break;
		default:
			return error(500, 'Internal Error: non-real document type state.');
	}

	return {
		slug: id,
		title: await redis.get(`content:${id}:title`),
		author: await redis.get(`content:${id}:name`),
		description: await redis.get(`content:${id}:description`),
		content_type: await redis.get(`content:${id}:content-type`),
		content_classifier: await redis.get(`content:${id}:content-classifier`),
		views: await redis.get(`content:${id}:views`),
		links: await redis.get(`content:${id}:links`),
		date: await redis.get(`content:${id}:date`),
		key: await redis.get(`content:${id}:unpublished-key`),
		content
	};
}

export const ssr = true;
