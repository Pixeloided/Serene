<div class="stripes fixed bottom-0 left-0 z-30 w-full text-center text-slate-800">
	<p class="">© 2024 Respective Holders</p>
	<p class="">
		<a href="/legal/privacy" class="hover:no-underline" target="_blank">Privacy Policy</a> |
		<a href="/legal/tos" class="hover:no-underline" target="_blank">Terms of Service</a>
		| <a href="https://github.com/pixeloided/serene" target="_blank">Source Code</a>
	</p>
	Made with&nbsp;<span class="heartbeat absolute text-red-500">♥</span><span class="mx-2"></span>by
	<a href="https://rhenkel.me" class="anchor hover:no-underline" target="_blank">Robert Henkel</a>.
	Reach out at
	<a href="mailto:contact@rhenkel.me" class="anchor hover:no-underline">contact@rhenkel.me</a>.
</div>

<style>
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
</style>
