<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const shareButton = document.querySelector('#share');
		shareButton?.addEventListener('click', () => {
			console.log(document.title, window.location.href);
			navigator.share({
				text: document.title + ':',
				url: window.location.href
			});
		});
	});
</script>

<hr class="hr relative left-1/2 z-10 -mb-5 mt-8 w-1/2 -translate-x-1/2 text-ss-teal/50" />
<div class="relative z-20 flex flex-nowrap justify-center text-center" id="share">
	<div
		class="flex select-none flex-nowrap rounded-full bg-ss-teal px-4 py-2 transition-all hover:scale-95 active:bg-green-400"
	>
		Share This Work&nbsp;&nbsp;<img src="/icons/share-from-square.svg" alt="share" class="w-6" />
	</div>
</div>
