<script lang="ts">
	import { page } from '$app/stores';
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
<div class="h-svh flex-col scroll-smooth">
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
			<div class="mb-4">{@html $page.data.content}</div>
			<ShareButton />
		{:else if $page.data.content_type === 'image'}
			<img src={$page.data.content} alt={$page.data.title} class="pointer-events-none" />
		{/if}
	</div>
	<div
		class="stripes footer relative bottom-0 left-1/2 mb-0 mt-8 w-full -translate-x-1/2 py-4 text-slate-800"
	>
		<div class="clear-both flex h-full w-full flex-wrap items-center justify-center text-center">
			<ul>
				<li>
					<p>© 2024 Respective Holders</p>
				</li>
				<li>
					<a href="/legal/privacy" class="anchor hover:no-underline">Privacy Policy</a> |
					<a href="/legal/tos" class="anchor hover:no-underline">Terms of Service</a>
					|
					<a
						href="https://github.com/pixeloided/serene"
						target="_blank"
						class="anchor hover:no-underline">Source Code</a
					>
				</li>
				<li>
					<p>
						Made with <span class="heartbeat absolute text-red-500">♥</span><span class="mx-2"
						></span>by
						<a href="https://rhenkel.me" class="anchor hover:no-underline" target="_blank"
							>Robert Henkel</a
						>. Reach out at
						<a href="mailto:contact@rhenkel.me" class="anchor hover:no-underline"
							>contact@rhenkel.me</a
						>.
					</p>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.footer {
		box-shadow: inset 0rem 0.5rem 2rem 0.25rem rgb(0 0 0 / 40%);
	}
	@keyframes panna_cotta {
		0% {
			background-position: 0% 100%;
		}
		100% {
			background-position: 100% 0%;
		}
	}
	@keyframes heartbeater {
		0% {
			font-size: 1rem;
			translate: 0rem 0rem;
		}
		50% {
			font-size: 1.25rem;
			translate: -0.125rem 0rem;
		}
		100% {
			font-size: 1rem;
			translate: 0rem 0rem;
		}
	}
	.heartbeat {
		animation: heartbeater 1s ease-in-out infinite;
	}
	.stripes {
		background-size: 18px 18px;
		background-image: linear-gradient(
			-45deg,
			rgb(230, 230, 230) 25%,
			rgb(240, 240, 240) 25%,
			rgb(240, 240, 240) 50%,
			rgb(230, 230, 230) 50%,
			rgb(230, 230, 230) 75%,
			rgb(240, 240, 240) 75%,
			rgb(240, 240, 240) 100%
		);
		animation: panna_cotta 180s linear infinite reverse;
	}
</style>
