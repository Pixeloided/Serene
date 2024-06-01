<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="h-full w-full">
	<Header />
	<h1 class="h1 ml-4 mt-2 font-semibold">Submitting Your Work</h1>
	<div class="ml-4 w-full pr-4 md:w-1/2">
		<p>
			Thanks for your interest in submitting your work! Our goal is to make this process as easy as
			possible. To submit your work, please send it attached to an email sent to <a
				href="mailto:submissions@serendipityscheme.com"
				class="text-ss-purple underline hover:no-underline">submissions@serendipityscheme.com</a
			> along with the following information:
		</p>
		<ul class=" ml-8 list-disc">
			<li><p>Your preferred name</p></li>
			<li><p>Title of your work</p></li>
			<li><p>(Optional, but preferred) A breif description of your work</p></li>
			<li><p>Any links (I.E. social media, portfolio site, email) that you want to promote</p></li>
		</ul>
		<p>
			We will do our best to get back to you as soon as we can. <span class="italic"
				>By submitting, you agree to our <a
					href="/CreatorAgreement.pdf"
					class="text-ss-purple underline hover:no-underline"
					target="_blank">Creator Agreement</a
				> and all terms therein.</span
			>
		</p>
	</div>
	<Footer />
</div>
