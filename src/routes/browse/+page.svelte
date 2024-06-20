<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';

	function changeFilter(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		window.location.href = '/browse?f=' + event.currentTarget.value;
	}

	let params: URLSearchParams;

	onMount(() => {
		params = new URLSearchParams(window.location.search);
	});
</script>

<Header />
<div class="relative mx-8 flex h-5/6 flex-col scroll-smooth md:mx-0">
	<div class="relative mt-8 w-full md:left-1/2 md:w-1/2 md:-translate-x-1/2">
		<div class="mb-4">
			<h2 class="h2 font-bold">Content Browser</h2>
			<h4 class="h4 italic text-slate-700">
				{$page.data.count} Post{#if $page.data.count !== 1}s{/if}
			</h4>
		</div>
		<div class="mb-4">
			<label for="filter">Filter</label>
			<select class="rounded-lg" name="filter" on:change={changeFilter}>
				<option value="all" selected={params?.get('f') == 'all'}>All</option>
				<option
					value="art"
					disabled={!$page.data.available_filters?.art}
					selected={params?.get('f') == 'art'}>Art</option
				>
				<option
					value="poetry"
					disabled={!$page.data.available_filters?.poetry}
					selected={params?.get('f') == 'poetry'}>Poetry</option
				>
				<option
					value="prose"
					disabled={!$page.data.available_filters?.prose}
					selected={params?.get('f') == 'prose'}>Prose</option
				>
				<option
					value="community-partner"
					disabled={!$page.data.available_filters?.community}
					selected={params?.get('f') == 'community-partner'}>Community Partners</option
				>
			</select>
		</div>
		<ul class="pb-36">
			<hr class="hr text-slate-500/50" />
			{#each $page.data.posts as item}
				<li class="mt-4">
					<a href={'/p/' + item.slug}>
						<h3 class="h3 font-semibold">{item.title}</h3>
						{#if item.description}<h4 class="italic">{item.description}</h4>{/if}
						<h4>
							{item.name} · {item.classifier} · {item.date} · {item.views} View{#if item.views !== 1}s{/if}
						</h4>
					</a>
					<hr class="hr mt-4 text-slate-500/50" />
				</li>
			{/each}
		</ul>
		{#if $page.data.count > $page.data.posts.length}
			<div class="mt-4">
				<div class="mb-2 w-full text-center italic">
					{$page.data.posts.length} / {$page.data.count} Posts
				</div>
				<div class="relative flex flex-nowrap justify-center text-center">
					<a
						class="rounded-full bg-slate-500 px-4 py-2 transition-all hover:scale-95 active:bg-slate-700"
						href={`/browse?l=${$page.data.max_len + 25}`}>Load More</a
					>
				</div>
			</div>
		{/if}
	</div>
</div>
<Footer />
