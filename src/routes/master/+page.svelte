<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor, type JSONContent } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Document from '@tiptap/extension-document';
	import Paragraph from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	import Typography from '@tiptap/extension-typography';
	import TextAlign from '@tiptap/extension-text-align';
	import { enhance } from '$app/forms';
	// import type { PageData } from './$types';

	// export let form;

	// export let data: PageData;
	const validImageExtensions = [
		'.apng',
		'.avif',
		'.gif',
		'.jpg',
		'.jpeg',
		'.jfif',
		'.pjpeg',
		'.pjp',
		'.png',
		'.svg',
		'.webp'
	];
	let tiptapContents: JSONContent;
	let type = 'text';
	let fileName: string;

	function changeType(e: any) {
		type = e.target.value;
	}
	function uploadFileChange(e: Event) {
		// @ts-ignore: 2339
		fileName = e.target?.files[0].name;
	}

	let element: any;
	export let editor: any;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Typography,
				Text,
				Paragraph,
				Document,
				TextAlign.configure({
					types: ['heading', 'paragraph']
				})
			],
			content: `<p>Go ahead and put some content in here! Plenty of rich text formatting options are available- often analogous to Google Docs key binds. The editor will automatically resize as you type.</p>`,
			editorProps: {
				attributes: {
					class:
						'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-2 border-black rounded-2xl min-h-56 p-2 mb-4'
				}
			},
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				tiptapContents = editor.getJSON();
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="ml-4 mt-4">
	<h2 class="h2 font-bold">Upload Content</h2>
	Or,<a class="anchor text-slate-700 decoration-blue-600" href="/master/manage"
		>Manage Existing Posts</a
	>
	<hr class="my-2 w-1/3" />
</div>
<form
	class="w-full md:ml-4 md:w-1/2"
	action="?/finalize"
	method="post"
	enctype="multipart/form-data"
	use:enhance
>
	<label class="label">
		<span>Author Name</span><span class="text-red-600">*</span>
		<br />
		<input
			class="input rounded-2xl border-2"
			type="text"
			name="name"
			placeholder="Full Name"
			autocomplete="off"
			required={true}
		/>
	</label>
	<label class="label">
		<span>External Links to Author</span>
		<br />
		<input
			class="input rounded-2xl border-2"
			type="text"
			name="links"
			autocomplete="off"
			placeholder="Links (seperate with commas)"
		/>
	</label>
	<label class="label">
		<span>Title</span><span class="text-red-600">*</span>
		<br />
		<input
			class="input rounded-2xl border-2"
			type="text"
			name="title"
			placeholder="Title of Content"
			autocomplete="off"
			required={true}
		/>
	</label>
	<label class="label">
		<span>Description</span>
		<br />
		<textarea
			class="textarea rounded-2xl border-2"
			rows="2"
			name="description"
			autocomplete="off"
			placeholder="Description of Content (reccomended for art)"
		/>
	</label>
	<label class="label">
		<span>Content Classification</span><span class="text-red-600">*</span>
		<br />
		<select
			class="select rounded-2xl border-2"
			id="content-classifier"
			name="content-classifier"
			required={true}
		>
			<option value="poetry">Poetry</option>
			<option value="prose">Prose</option>
			<option value="community-partners">Community Partners</option>
			<option value="art">Art</option>
		</select>
	</label>
	<label class="label">
		<span>Content Type</span><span class="text-red-600">*</span>
		<br />
		<select
			class="select rounded-2xl border-2"
			id="content-type"
			name="content-type"
			on:change={changeType}
			required={true}
		>
			<option value="text">Text Document</option>
			<option value="image">Image</option>
		</select>
	</label>
	{#if type == 'image'}
		<label class="file-upload btn my-4 w-full rounded-2xl py-2 text-left">
			<span>Upload Image</span><span class="text-red-600">*</span>{#if fileName}<span
					class="text-right italic">{fileName}</span
				>{/if}
			<br />
			<input
				type="file"
				id="file"
				name="file"
				class="my-4"
				required={true}
				accept="image/*"
				on:change={uploadFileChange}
			/>
		</label>
	{:else if type == 'text'}
		<span>Content</span><span class="text-red-600">*</span>
		<br />
		<div bind:this={element} />
		<input type="hidden" name="content" value={JSON.stringify(tiptapContents)} required={true} />
	{/if}
	<div class="mb-4 w-full text-center">
		<button type="submit" class="btn mr-2 w-full rounded-2xl bg-green-500">📋 Submit</button>
	</div>
</form>

<style>
	input[type='file'] {
		display: none;
	}
	.file-upload {
		border: 2px solid #000;
		background-color: #ddd;
		display: inline-block;
		padding: 6px 12px;
		cursor: pointer;
	}
</style>
