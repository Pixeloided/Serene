import 'dotenv/config';
import { error } from '@sveltejs/kit';
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
export async function load({ params, url }) {
	await ensureOpen();
	const id = params.slug;
	const pub = ((await redis.get(`content:${id}:published`)) as string) == 'true';
	if (pub == true) {
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

		await redis.incr(`content:${id}:views`);
		await redis.zIncrBy('views', 1, id);

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
			content
		};
	} else if (
		pub == false &&
		url.searchParams.get('key') == ((await redis.get(`content:${id}:unpublished-key`)) as string)
	) {
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
			links: await redis.get(`content:${id}:links`),
			views: 0,
			key: url.searchParams.get('key'),
			date: await redis.get(`content:${id}:date`),
			content
		};
	} else {
		return error(404, 'Not Found');
	}
}

export const ssr = true;
