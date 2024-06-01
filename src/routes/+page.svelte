<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';

	let is_available: boolean = false;
	let isReduced: boolean = true;

	onMount(() => {
		is_available = true;
		isReduced =
			(window.matchMedia(`(prefers-reduced-motion: reduce)`) as any) === true ||
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
	});

	let xPoses: number[] = [0, 0, 0, 0, 0];
	const doWaveAnimation = (e: MouseEvent) => {
		if (!isReduced || !is_available) {
			const x = e.clientX;
			const w =
				(-(Math.max(window.innerWidth, x) - Math.min(window.innerWidth, x)) / 10) *
				(window.innerWidth / 1024);
			xPoses = [0.2 * w, 0.4 * w, 0.6 * w, 0.8 * w, w];
		}
	};
</script>

<svelte:window on:mousemove={doWaveAnimation} />
<div class="relative h-svh scroll-smooth" role="document">
	<div class="h-full w-full">
		<div class="relative z-20 -mb-5 h-5/6 w-full bg-radial-purple" id="title">
			<div
				class="panner starhue absolute left-1/2 top-0 z-10 h-full w-full min-w-1200 -translate-x-1/2 bg-star bg-10 opacity-10"
			/>
			<div class="absolute left-0 top-0 z-20 h-full w-full bg-radial-transparent" />
			<h1
				class="h1 absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 scale-150 text-center font-bold text-white"
			>
				The Serendipity Scheme
			</h1>
		</div>
		<div
			class="clippy clippy-shadow stripes absolute left-1/2 z-30 hidden h-1/6 w-full min-w-2000 -translate-x-1/2 md:block"
			id="nav"
		>
			<div class="flex h-full w-full flex-wrap items-center justify-center text-center">
				<a
					href="#mission"
					class="anchor h3 mr-2 text-slate-700 transition-all hover:rotate-2 hover:text-black hover:no-underline"
					>About</a
				><span class="select-none"> | </span>
				<a
					href="/submission-guide"
					class="anchor h3 mx-2 text-slate-700 transition-all hover:rotate-2 hover:text-black hover:no-underline"
					>Submit</a
				><span class="select-none"> | </span>
				<a
					href="/browse"
					class="anchor h3 mx-2 text-slate-700 transition-all hover:rotate-2 hover:text-black hover:no-underline"
					>Browse</a
				><span class="select-none"> | </span>
				<a
					href="/p/random"
					class="anchor h3 ml-2 text-ss-teal transition-all hover:rotate-2 hover:text-ss-teal/70 hover:no-underline"
					>Random</a
				>
			</div>
		</div>
		<div
			class="clippy clippy-shadow stripes absolute left-1/2 z-30 block h-56 min-h-52 w-full min-w-2000 -translate-x-1/2 -translate-y-20 md:hidden"
		>
			<ul class="flex h-full w-full flex-col flex-wrap items-center justify-center text-center">
				<li>
					<a href="#mission" class="anchor h3 mr-2">About</a>
				</li>
				<li>
					<a href="/submission-guide" class="anchor h3 mx-2">Submit</a>
				</li>
				<li>
					<a href="/browse" class="anchor h3 mx-2">Browse</a>
				</li>
				<li>
					<a href="/p/random" class="anchor h3 ml-2 font-bold text-ss-teal">Random</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="body" class="-translate-y-15 md:translate-y-0">
		<div class="translate-y-32 md:translate-y-0">
			<div
				id="bubbles"
				class="absolute z-10 hidden h-full w-full flex-row flex-nowrap justify-end p-0 lg:flex"
			>
				<div
					class="bubble-4 absolute mr-10 h-full w-full scale-125 bg-right bg-no-repeat"
					id="bubble-4"
					style="translate: {xPoses[4]}px"
				/>
				<div
					class="bubble-3 absolute mr-10 h-full w-full scale-125 bg-right bg-no-repeat"
					id="bubble-3"
					style="translate: {xPoses[3]}px"
				/>
				<div
					class="bubble-2 absolute mr-10 h-full w-full scale-125 bg-right bg-no-repeat"
					id="bubble-2"
					style="translate: {xPoses[2]}px"
				/>
				<div
					class="bubble-1 absolute mr-10 h-full w-full scale-125 bg-right bg-no-repeat"
					id="bubble-1"
					style="translate: {xPoses[1]}px"
				/>
				<div
					class="bubble-0 absolute mr-10 h-full w-full scale-125 bg-right bg-no-repeat"
					id="bubble-0"
					style="translate: {xPoses[0]}px"
				/>
			</div>
			<div id="mission" class="relative left-1/2 z-40 mb-8 w-full -translate-x-1/2 text-slate-800">
				<h2 class="h2 ml-4 font-semibold transition-all">
					Our <span class="italic text-ss-teal">Mission</span>
				</h2>
				<hr class="my-4 ml-6 w-1/4 text-slate-400" />
				<p class="ml-4 w-full pr-8 text-lg md:w-1/2">
					<span class="italic transition-all md:hover:text-pink-600">The Serendipity Scheme</span> was
					dreamed up to provide Whatcom County teens with an accessible, stress-free way to promote their
					creativity. By uploading their art and writing on our website and distributing QR codes linked
					to it, young artists and writers have the opportunity to engage with the broader community
					and receive recognition and support back from it. As creatives ourselves, we understand how
					daunting sharing your voice with the world can be, but we also know that the only way to gain
					confidence and improve our craft is by taking that first step out into the world! Our mission
					is to cultivate a simple, and serendipitous platform that highlights teen imagination, offers
					an inspiring surprise to anyone who stumbles upon us, and makes Whatcom County just a little
					bit brighter.
				</p>
			</div>
			<div id="about" class="relative left-1/2 z-40 mb-8 w-full -translate-x-1/2 text-slate-800">
				<h2 class="h2 ml-4 font-semibold transition-all">
					About <span class="italic text-ss-teal">Us</span>
				</h2>
				<hr class="my-4 ml-6 w-1/4 text-slate-400" />
				<div class="my-6 ml-6 flex">
					<img
						src="/img/ella.webp"
						alt="headshot of a person"
						class="pointer-events-none h-20 w-20 rounded-full border-2 border-ss-teal shadow-lg"
						id="ella"
					/>
					<ul class="ml-4 w-full">
						<li>
							<h4 class="h4 font-bold text-ss-teal">Ella Prichard</h4>
							<h6 class="h6 italic text-slate-700">Director</h6>
						</li>
						<li>
							<p class="w-full pr-8 text-lg md:w-1/2">
								Hello there! My name is Ella Prichard and I'm the founder and director of The
								Serendipity Scheme. I'm a teen speculative fiction author who loves time travel
								stories, studying history, and caramel cake. I created The Serendipity Scheme as a
								way to help fellow creative teens bring their work to life, and to cultivate a
								greater presence of art and writing throughout Whatcom County. I'm so glad you
								stumbled upon us, and I hope you enjoy your stay!
								<a
									class="text-ss-purple underline hover:text-ss-purple/60 hover:no-underline"
									href="mailto:ella@serendipityscheme.com">ella@serendipityscheme.com</a
								>
							</p>
						</li>
					</ul>
				</div>
				<div class="my-6 flex pb-4">
					<img
						src="/img/maya.webp"
						alt="headshot of a person"
						class="pointer-events-none ml-6 h-20 w-20 rounded-full border-2 border-ss-teal"
						id="maya"
					/>
					<ul class="ml-4 w-full">
						<li>
							<h4 class="h4 font-bold text-ss-teal">Maya Dam</h4>
							<h6 class="h6 italic text-slate-700">Art Curator</h6>
						</li>
						<li>
							<p class="w-full pr-8 text-lg md:w-1/2">
								Hi, I’m Maya! I’m a teen artist who specializes in traditional art and I especially
								love watercolor and printmaking. My favorite thing about art is that it can turn
								your imagination into reality. You can follow my art journey <a
									href="https://instagram.com/lejingmun"
									target="_blank"
									class="text-ss-purple underline hover:text-ss-purple/60 hover:no-underline"
									>@lejingmun</a
								><br />
								I look forward to seeing your art :)
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="my-2 h-1/6 md:hidden" />
</div>
<Footer />

<style>
	#bubbles div {
		filter: drop-shadow(3px 3px 5px black);
	}
	h1 {
		filter: drop-shadow(3px 3px 3px black);
	}
	h2 {
		filter: drop-shadow(1px 1px 1px black);
	}
	h4 {
		filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.75));
	}
	#ella {
		filter: drop-shadow(-3px 3px 3px teal);
	}
	#maya {
		filter: drop-shadow(0px 3px 3px teal);
	}
	.bubble-0 {
		/* transition: all 0.2s ease-out; */
		transition: all 1.2s ease-out;
		animation: bounce 4s ease-in-out infinite;
		background-image: url('/img/waves/0.svg');
	}
	.bubble-1 {
		/* transition: all 0.4s ease-out; */
		transition: all 1s ease-out;
		animation: bounce 5s ease-in-out infinite;
		background-image: url('/img/waves/1.svg');
	}
	.bubble-2 {
		transition: all 0.8s ease-out;
		animation: bounce 6s ease-in-out infinite;
		background-image: url('/img/waves/2.svg');
	}
	.bubble-3 {
		/* transition: all 0.8s ease-out; */
		transition: all 0.6s ease-out;
		animation: bounce 7s ease-in-out infinite;
		background-image: url('/img/waves/3.svg');
	}
	.bubble-4 {
		/* transition: all 1s ease-out; */
		transition: all 0.4s ease-out;
		animation: bounce 8s ease-in-out infinite;
		background-image: url('/img/waves/4.svg');
	}
	.starhue {
		filter: brightness(0%) saturate(100%) invert(14%) sepia(66%) saturate(4562%) hue-rotate(293deg)
			brightness(86%) contrast(89%);
	}
	@media (prefers-reduced-motion) {
		.panner {
			animation: none;
		}
		.stripes {
			animation: none;
		}
	}
	@keyframes panna_cotta {
		0% {
			background-position: 0% 100%;
		}
		100% {
			background-position: 100% 0%;
		}
	}
	@keyframes bounce {
		0% {
			margin-top: 20px;
		}
		50% {
			margin-top: -20px;
		}
		100% {
			margin-top: 20px;
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
	.panner {
		animation: panna_cotta 90s linear infinite;
	}
	.clippy {
		clip-path: polygon(
			0% 5%,
			1.25% 0%,
			2.5% 5%,
			3.75% 0%,
			5% 5%,
			6.25% 0%,
			7.5% 5%,
			8.75% 0%,
			10% 5%,
			11.25% 0%,
			12.5% 5%,
			13.75% 0%,
			15% 5%,
			16.25% 0%,
			17.5% 5%,
			18.75% 0%,
			20% 5%,
			21.25% 0%,
			22.5% 5%,
			23.75% 0%,
			25% 5%,
			26.25% 0%,
			27.5% 5%,
			28.75% 0%,
			30% 5%,
			31.25% 0%,
			32.5% 5%,
			33.75% 0%,
			35% 5%,
			36.25% 0%,
			37.5% 5%,
			38.75% 0%,
			40% 5%,
			41.25% 0%,
			42.5% 5%,
			43.75% 0%,
			45% 5%,
			46.25% 0%,
			47.5% 5%,
			48.75% 0%,
			50% 5%,
			51.25% 0%,
			52.5% 5%,
			53.75% 0%,
			55% 5%,
			56.25% 0%,
			57.5% 5%,
			58.75% 0%,
			60% 5%,
			61.25% 0%,
			62.5% 5%,
			63.75% 0%,
			65% 5%,
			66.25% 0%,
			67.5% 5%,
			68.75% 0%,
			70% 5%,
			71.25% 0%,
			72.5% 5%,
			73.75% 0%,
			75% 5%,
			76.25% 0%,
			77.5% 5%,
			78.75% 0%,
			80% 5%,
			81.25% 0%,
			82.5% 5%,
			83.75% 0%,
			85% 5%,
			86.25% 0%,
			87.5% 5%,
			88.75% 0%,
			90% 5%,
			91.25% 0%,
			92.5% 5%,
			93.75% 0%,
			95% 5%,
			96.25% 0%,
			97.5% 5%,
			98.75% 0%,
			100% 5%,
			100% 100%,
			0% 100%
		);
	}
	.clippy-shadow {
		box-shadow: inset 0rem 0.5rem 2rem 0.25rem rgb(0 0 0 / 40%);
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
