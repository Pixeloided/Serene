<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import ShareButton from '$lib/ShareButton.svelte';
	import { onMount } from 'svelte';

	let is_random = false;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const sel = urlParams.get('sel');
		if (sel === 'random') {
			is_random = true;
		}
	});
</script>

<svelte:head>
	<title>{$page.data.title} by {$page.data.author}</title>
</svelte:head>
<Header />
<div class="mx-4 h-5/6 flex-col scroll-smooth">
	<div class="relative mt-8 w-full md:left-1/2 md:w-1/2 md:-translate-x-1/2">
		<div class="flex flex-row">
			{#if is_random}
				<a href="/p/random?excl={$page.data.slug}">
					<div
						class="mr-2 h-14 w-14 select-none self-center rounded-2xl bg-ss-teal p-2 text-center shadow-lg transition-all hover:scale-90 active:bg-green-400"
					>
						<img src="/icons/repeat.svg" alt="random" class="w-10" />
					</div>
				</a>
			{/if}
			<h1 class="h1 font-bold">{$page.data.title}</h1>
		</div>
		{#if $page.data.description}
			<h4 class="h4 text-slate-700">{$page.data.description}</h4>
		{/if}
		<h5 class="h5 italic text-slate-500">
			{$page.data.author} · {#if $page.data.content.split(' ').length > 200}{Math.floor(
					$page.data.content.split(' ').length / 200
				)} minute read ·
			{/if}{$page.data.views} views · {$page.data.date}
		</h5>
		{#if $page.data.links}
			<div class="-mb-4 flex flex-row">
				|&nbsp;
				{#each $page.data.links.split(',') as link}
					<a href={link} class="anchor text-slate-700 decoration-blue-600" target="_blank">{link}</a
					>&nbsp;|&nbsp;
				{/each}
			</div>
		{:else}
			<div class="-mb-6" />
		{/if}
		<br />
		{#if $page.data.content.split(' ').length > 200}
			<ShareButton />
		{/if}
		<br />
		{#if $page.data.content_type === 'text'}
			<div class="mb-32">
				<div>{@html $page.data.content}</div>
			</div>
		{:else if $page.data.content_type === 'image'}
			<img src={$page.data.content} alt={$page.data.title} class="pointer-events-none mb-32" />
		{/if}
	</div>
</div>
<Footer />
