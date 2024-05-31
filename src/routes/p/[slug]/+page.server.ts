import 'dotenv/config';
import { createClient } from '@vercel/kv';
import { error } from '@sveltejs/kit';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align';
import type { JSONContent } from '@tiptap/core';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
	const client = createClient({
		url: process.env.KV_REST_API_URL,
		token: process.env.KV_REST_API_TOKEN
	});
	const id = params.slug;
	const pub = (await client.get(`content:${id}:published`)) as boolean;
	if (pub == true) {
		let content: string | undefined | null = undefined;
		switch (await client.get(`content:${id}:content-type`)) {
			case 'text':
				// console.log(await client.get(params.slug + ':content'));
				content = generateHTML((await client.get(`content:${id}:content`)) as JSONContent, [
					StarterKit,
					Typography,
					TextAlign
				]);
				break;
			case 'image':
				content = await client.get(`content:${id}:content`);
				break;
			default:
				return error(500, 'Internal Error: non-real document type state.');
		}

		await client.incr(`content:${id}:views`);
		await client.zincrby('views', 1, id);

		return {
			slug: id,
			title: await client.get(`content:${id}:title`),
			author: await client.get(`content:${id}:name`),
			description: await client.get(`content:${id}:description`),
			content_type: await client.get(`content:${id}:content-type`),
			content_classifier: await client.get(`content:${id}:content-classifier`),
			views: await client.get(`content:${id}:views`),
			links: await client.get(`content:${id}:links`),
			date: await client.get(`content:${id}:date`),
			content
		};
	} else if (
		pub == false &&
		url.searchParams.get('key') == ((await client.get(`content:${id}:unpublished-key`)) as string)
	) {
		let content: string | undefined | null = undefined;
		switch (await client.get(`content:${id}:content-type`)) {
			case 'text':
				// console.log(await client.get(params.slug + ':content'));
				content = generateHTML((await client.get(`content:${id}:content`)) as JSONContent, [
					StarterKit,
					Typography,
					TextAlign
				]);
				break;
			case 'image':
				content = await client.get(`content:${id}:content`);
				break;
			default:
				return error(500, 'Internal Error: non-real document type state.');
		}
		return {
			slug: id,
			title: await client.get(`content:${id}:title`),
			author: await client.get(`content:${id}:name`),
			description: await client.get(`content:${id}:description`),
			content_type: await client.get(`content:${id}:content-type`),
			content_classifier: await client.get(`content:${id}:content-classifier`),
			links: await client.get(`content:${id}:links`),
			views: 0,
			key: url.searchParams.get('key'),
			date: await client.get(`content:${id}:date`),
			content
		};
	} else {
		return error(404, 'Not Found');
	}
}

export const ssr = true;
