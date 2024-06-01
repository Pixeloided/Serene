<script lang="ts">
	export function showDrawer(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		if (window.innerWidth < 768) document.getElementById('sidenav')?.classList.add('w-5/6');
		else if (window.innerWidth < 1062 && window.innerWidth > 768)
			document.getElementById('sidenav')?.classList.add('w-1/2');
		else document.getElementById('sidenav')?.classList.add('w-1/4');
		document.getElementById('cover')?.classList.add('bg-black/50');
		document.getElementById('cover')?.classList.add('w-full');
		document.getElementById('bars')?.classList.add('rotate-90');
		is_open = true;
	}

	export function closeDrawer(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		if (window.innerWidth < 768) document.getElementById('sidenav')?.classList.remove('w-5/6');
		else if (window.innerWidth < 1062 && window.innerWidth > 768)
			document.getElementById('sidenav')?.classList.remove('w-1/2');
		else document.getElementById('sidenav')?.classList.remove('w-1/4');
		document.getElementById('cover')?.classList.remove('bg-black/50');
		document.getElementById('bars')?.classList.remove('rotate-90');
		setTimeout(() => document.getElementById('cover')?.classList.remove('w-full'), 500);
		is_open = false;
	}

	export let is_open = false;
</script>

<div
	id="sidenav"
	class="transition-all-long fixed left-0 top-0 z-50 h-full w-0 overflow-x-hidden bg-gray-300 pt-16 shadow-xl shadow-black"
>
	<div
		class="absolute right-2 top-2 block text-6xl font-bold text-black no-underline transition-all hover:text-slate-700"
	>
		<button on:click={closeDrawer}>&times;</button>
	</div>
	<a
		href="/"
		class="ml-4 block w-max p-2 pr-8 text-3xl font-semibold text-black no-underline transition-all hover:ml-6 hover:text-slate-700"
		id="link">Home</a
	>
	<hr class="hr ml-8 w-1/4 text-slate-500/50" />
	<a
		href="/browse"
		class="ml-4 block w-max p-2 pr-8 text-3xl font-semibold text-black no-underline transition-all hover:ml-6 hover:text-slate-700"
		id="link">Browse</a
	>
	<hr class="hr ml-8 w-1/4 text-slate-500/50" />
	<a
		href="/p/random"
		class="ml-4 block w-max p-2 pr-8 text-3xl font-semibold text-black no-underline transition-all hover:ml-6 hover:text-slate-700"
		id="link">Random Post</a
	>
	<hr class="hr ml-8 w-1/4 text-slate-500/50" />
	<a
		href="/submission-guide"
		class="ml-4 block w-max p-2 pr-8 text-3xl font-semibold text-black no-underline transition-all hover:ml-6 hover:text-slate-700"
		id="link">Submit Your Own</a
	>
	<hr class="hr ml-8 w-1/4 text-slate-500/50" />
</div>
<div class="stripes relative flex h-1/6 w-full flex-row bg-slate-600 py-4">
	<button on:click={showDrawer}>
		<img
			src="/icons/bars.svg"
			alt="bars"
			class="transition-all-long bars mx-4 w-8 hover:rotate-90"
			id="bars"
		/>
	</button>
	<h3 class="h3 font-bold">The Serendipity Scheme</h3>
</div>
<button
	class="transition-color-long absolute right-0 top-0 z-40 h-full w-0"
	id="cover"
	on:click={closeDrawer}
/>

<style>
	.transition-all-long {
		transition: all 0.5s;
	}
	.transition-color-long {
		transition: background-color 0.5s;
	}
	.bars:hover {
		filter: brightness(0) saturate(100%) invert(22%) sepia(16%) saturate(1092%) hue-rotate(176deg)
			brightness(96%) contrast(88%);
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
	@keyframes panna_cotta {
		0% {
			background-position: 0% 100%;
		}
		100% {
			background-position: 100% 0%;
		}
	}
</style>
