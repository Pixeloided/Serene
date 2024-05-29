<script lang="ts">
    let xPoses: number[] = [0, 0, 0, 0, 0];
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) as any === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    const doWaveAnimation = (e: MouseEvent) => {
        if (!isReduced) {
            const x = e.clientX;
            const w = (-(Math.max(window.innerWidth, x) - Math.min(window.innerWidth, x)) / 10) * (window.innerWidth / 1024);
            xPoses = [0.2 * w, 0.4 * w, 0.6 * w, 0.8 * w, w]
        }
    }
</script>
<svelte:window on:mousemove={doWaveAnimation} />
<div class="relative h-svh scroll-smooth" role="document">
    <div class="w-full h-full">
        <div class="w-full h-5/6 -mb-5 relative bg-radial-purple z-20" id="title">
            <div class="bg-star absolute left-1/2 top-0 -translate-x-1/2 z-10 h-full w-full min-w-1200 opacity-10 bg-10 panner starhue" />
            <div class="bg-radial-transparent absolute left-0 top-0 w-full h-full z-20" />
            <h1 class="h1 z-30 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold scale-150 text-center">The Serendipity Scheme</h1>
        </div>
        <div class="absolute z-30 left-1/2 -translate-x-1/2 h-1/6 w-full min-w-2000 clippy clippy-shadow stripes hidden md:block" id="nav">
            <div class="text-center h-full w-full flex items-center justify-center flex-wrap">
                <a href="#mission" class="anchor h3 mr-2 text-slate-700 hover:text-black hover:rotate-2 hover:no-underline transition-all">About</a><span class="select-none"> | </span>
                <a href="/submission-guide" class="anchor h3 mx-2 text-slate-700 hover:text-black hover:rotate-2 hover:no-underline transition-all">Submit</a><span class="select-none"> | </span>
                <a href="/browse" class="anchor h3 mx-2 text-slate-700 hover:text-black hover:rotate-2 hover:no-underline transition-all">Browse</a><span class="select-none"> | </span>
                <a href="/p/random" class="anchor h3 text-ss-teal ml-2 hover:text-ss-teal/70 hover:rotate-2 hover:no-underline transition-all">Random</a>
            </div>
        </div>
        <div class="block md:hidden absolute z-30 left-1/2 -translate-x-1/2 -translate-y-20 h-56 min-h-52 w-full min-w-2000 clippy clippy-shadow stripes">
            <ul class="text-center h-full w-full flex flex-col items-center justify-center flex-wrap">
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
                    <a href="/p/random" class="anchor h3 text-ss-teal font-bold ml-2">Random</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="body" class="-translate-y-15 md:translate-y-0">
        <div class="translate-y-32 md:translate-y-0">
            <div id="bubbles" class="h-full w-full absolute p-0 justify-end hidden lg:flex flex-row flex-nowrap z-10">
                <div class="bubble-4 w-full h-full bg-no-repeat mr-10 absolute bg-right scale-125" id="bubble-4" style="translate: {xPoses[4]}px" />
                <div class="bubble-3 w-full h-full bg-no-repeat mr-10 absolute bg-right scale-125" id="bubble-3" style="translate: {xPoses[3]}px" />
                <div class="bubble-2 w-full h-full bg-no-repeat mr-10 absolute bg-right scale-125" id="bubble-2" style="translate: {xPoses[2]}px" />
                <div class="bubble-1 w-full h-full bg-no-repeat mr-10 absolute bg-right scale-125" id="bubble-1" style="translate: {xPoses[1]}px" />
                <div class="bubble-0 w-full h-full bg-no-repeat mr-10 absolute bg-right scale-125" id="bubble-0" style="translate: {xPoses[0]}px" />
            </div>
            <div id="mission" class="w-full mb-8 relative left-1/2 -translate-x-1/2 z-40 text-slate-800">
                <h2 class="h2 font-semibold ml-4 transition-all">Our <span class="text-ss-teal italic">Mission</span></h2>
                <hr class="w-1/4 ml-6 my-4 text-slate-400" />
                <p class="w-full md:w-1/2 ml-4 pr-8 text-lg">
                    <span class="italic md:hover:text-pink-600 transition-all">The Serendipity Scheme</span> was dreamed up to provide Whatcom County teens with an accessible, stress-free way to promote their creativity. By uploading their art and writing on our website and distributing QR codes linked to it, young artists and writers have the opportunity to engage with the broader community and receive recognition and support back from it. As creatives ourselves, we understand how daunting sharing your voice with the world can be, but we also know that the only way to gain confidence and improve our craft is by taking that first step out into the world! Our mission is to cultivate a simple, and serendipitous platform that highlights teen imagination, offers an inspiring surprise to anyone who stumbles upon us, and makes Whatcom County just a little bit brighter. 
                </p>
            </div>
            <div id="about" class="w-full mb-8 relative left-1/2 -translate-x-1/2 z-40 text-slate-800">
                <h2 class="h2 font-semibold ml-4 transition-all">About <span class="text-ss-teal italic">Us</span></h2>
                <hr class="w-1/4 ml-6 my-4 text-slate-400" />
                <div class="flex my-6 ml-6">
                    <img src="/img/ella.webp" alt="headshot of a person" class="w-20 h-20 rounded-full border-ss-teal border-2 shadow-lg pointer-events-none" id="ella"/>
                    <ul class="ml-4 w-full">
                        <li>
                            <h4 class="h4 font-bold text-ss-teal">Ella Prichard</h4>
                            <h6 class="h6 italic text-slate-700">Director</h6>
                        </li>
                        <li>
                            <p class="w-full md:w-1/2 text-lg pr-8">
                                Hello there! My name is Ella Prichard and I'm the founder and director of The Serendipity Scheme. I'm a teen speculative fiction author who loves time travel stories, studying history, and caramel cake. I created The Serendipity Scheme as a way to help fellow creative teens bring their work to life, and to cultivate a greater presence of art and writing throughout Whatcom County. I'm so glad you stumbled upon us, and I hope you enjoy your stay! 
                                <a class="underline hover:no-underline hover:text-ss-purple/60 text-ss-purple" href="mailto:ella@serendipityscheme.com">ella@serendipityscheme.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="flex my-6 pb-4">
                    <img src="/img/maya.webp" alt="headshot of a person" class="w-20 h-20 rounded-full ml-6 border-ss-teal border-2 pointer-events-none" id="maya"/>
                    <ul class="ml-4 w-full">
                        <li>
                            <h4 class="h4 font-bold text-ss-teal">Maya Dam</h4>
                            <h6 class="h6 italic text-slate-700">Art Curator</h6>
                        </li>
                        <li>
                            <p class="w-full md:w-1/2 text-lg pr-8">
                                Hi, I’m Maya! I’m a teen artist who specializes in traditional art and I especially love watercolor and printmaking. My favorite thing about art is that it can turn your imagination into reality. You can follow my art journey <a href="https://instagram.com/lejingmun" target="_blank" class="underline hover:no-underline hover:text-ss-purple/60 text-ss-purple">@lejingmun</a><br />
                                I look forward to seeing your art :)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="h-1/6 md:hidden my-2" />
    <div class="w-full h-1/6 relative left-1/2 -translate-x-1/2 z-40 text-slate-800 stripes footer">
        <div class="text-center h-full w-full flex items-center justify-center flex-wrap">
            <ul>
                <li>
                    <p>© Copyright Notice</p>
                </li>
                <li>
                    <a href="/legal/privacy" class="anchor hover:no-underline">Privacy Policy</a> | <a href="/legal/tos" class="anchor hover:no-underline">Terms of Service</a>
                </li>
                <li>
                    <p>Made with <span class="text-red-500 heartbeat absolute">♥</span><span class="mx-2"></span>by <a href="https://rhenkel.me" class="anchor hover:no-underline" target="_blank">Robert Henkel</a>. Reach out at <a href="mailto:contact@rhenkel.me" class="anchor hover:no-underline">contact@rhenkel.me</a>.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
<style>
    .footer {
        box-shadow: inset 0rem 0.5rem 2rem 0.25rem rgb(0 0 0 / 40%);
    }
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
        filter: drop-shadow(2px 2px 1px rgba(0,0,0,0.75));
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
        background-image: url("/img/waves/0.svg");
    }
    .bubble-1 {
        /* transition: all 0.4s ease-out; */
        transition: all 1s ease-out;
        animation: bounce 5s ease-in-out infinite;
        background-image: url("/img/waves/1.svg");
    }
    .bubble-2 {
        transition: all 0.8s ease-out;
        animation: bounce 6s ease-in-out infinite;
        background-image: url("/img/waves/2.svg");
    }
    .bubble-3 {
        /* transition: all 0.8s ease-out; */
        transition: all 0.6s ease-out;
        animation: bounce 7s ease-in-out infinite;
        background-image: url("/img/waves/3.svg");
    }
    .bubble-4 {
        /* transition: all 1s ease-out; */
        transition: all 0.4s ease-out;
        animation: bounce 8s ease-in-out infinite;
        background-image: url("/img/waves/4.svg");
    }
    .starhue {
        filter: brightness(0%) saturate(100%) invert(14%) sepia(66%) saturate(4562%) hue-rotate(293deg) brightness(86%) contrast(89%);
    }
    @media(prefers-reduced-motion) {
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
    .heartbeat {
        animation: heartbeater 1s ease-in-out infinite;
    }
    .panner {
        animation: panna_cotta 90s linear infinite;
    }
    .clippy {
        
        clip-path: polygon(
            0% 5%, 1.25% 0%, 2.5% 5%, 
            3.75% 0%, 5% 5%, 6.25% 0%, 
            7.5% 5%, 8.75% 0%, 10% 5%, 
            11.25% 0%, 12.5% 5%, 13.75% 0%, 
            15% 5%, 16.25% 0%, 17.5% 5%, 
            18.75% 0%, 20% 5%, 21.25% 0%, 
            22.5% 5%, 23.75% 0%, 25% 5%, 
            26.25% 0%, 27.5% 5%, 28.75% 0%, 
            30% 5%, 31.25% 0%, 32.5% 5%, 
            33.75% 0%, 35% 5%, 36.25% 0%, 
            37.5% 5%, 38.75% 0%, 40% 5%, 
            41.25% 0%, 42.5% 5%, 43.75% 0%, 
            45% 5%, 46.25% 0%, 47.5% 5%, 
            48.75% 0%, 50% 5%, 51.25% 0%, 
            52.5% 5%, 53.75% 0%, 55% 5%, 
            56.25% 0%, 57.5% 5%, 58.75% 0%, 
            60% 5%, 61.25% 0%, 62.5% 5%, 
            63.75% 0%, 65% 5%, 66.25% 0%, 
            67.5% 5%, 68.75% 0%, 70% 5%, 
            71.25% 0%, 72.5% 5%, 73.75% 0%, 
            75% 5%, 76.25% 0%, 77.5% 5%, 
            78.75% 0%, 80% 5%, 81.25% 0%, 
            82.5% 5%, 83.75% 0%, 85% 5%, 
            86.25% 0%, 87.5% 5%, 88.75% 0%, 
            90% 5%, 91.25% 0%, 92.5% 5%, 
            93.75% 0%, 95% 5%, 96.25% 0%, 
            97.5% 5%, 98.75% 0%, 100% 5%, 
            100% 100%, 0% 100%
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