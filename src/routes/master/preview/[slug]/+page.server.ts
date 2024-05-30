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
export async function load({ params }) {
	const client = createClient({
		url: process.env.KV_REST_API_URL,
		token: process.env.KV_REST_API_TOKEN
	});
	if ((await client.get(params.slug + ':published')) as boolean) {
		let content: string | undefined | null = undefined;
		switch (await client.get(params.slug + ':content-type')) {
			case 'text':
				// console.log(await client.get(params.slug + ':content'));
				content = generateHTML((await client.get(params.slug + ':content')) as JSONContent, [
					StarterKit,
					Typography,
					TextAlign
				]);
				break;
			case 'image':
				content = await client.get(params.slug + ':content');
				break;
			default:
				return error(500, 'Internal Error: non-real document type state.');
		}
		return {
			slug: params.slug,
			title: await client.get(params.slug + ':title'),
			author: await client.get(params.slug + ':name'),
			description: await client.get(params.slug + ':description'),
			content_type: await client.get(params.slug + ':content-type'),
			content_classifier: await client.get(params.slug + ':content-classifier'),
			links: await client.get(params.slug + ':links'),
			content
		};
	} else error(404, 'Not found');
}

export const ssr = true;
