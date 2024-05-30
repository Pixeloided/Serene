<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let urlParams = new URLSearchParams(window.location.search);
		let redi = urlParams.get('r');
		let time = urlParams.get('t');

		let timeOut = time ? parseInt(time) : 1000;

		setTimeout(() => {
			window.location.href = redi ? redi : '/';
		}, timeOut);
	});
</script>

<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
	<img src="/img/vro.webp" alt="i fw u vro" />
	<h2 class="h2">(this is the loading page)</h2>
</div>
