<script>
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">
	</svelte:fragment> -->
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="m">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageFooter"> -->
		<!-- <div class="text-center text-sm bottom-0 text-slate-600 content-center py-2">
			<div>
				© 2024 The Serendipity Scheme, All Rights Reserved.
			</div>
			<div>
				<a href="/legal/privacy" class="anchor">Privacy Policy</a> | <a href="/legal/tos" class="anchor">Terms of Service</a>
			</div> -->
			<!-- <div>
				Book icon by Derrick Snider from <a href="https://thenounproject.com/" target="_blank" title="Book Icons" class="anchor">Noun Project</a>{" "}(CC BY 3.0)
			</div> -->
		<!-- </div> -->
	<!-- </svelte:fragment> -->
</AppShell>
<style>
	:global(*::selection) {
		color: white;
		background: blue;
	}
</style>