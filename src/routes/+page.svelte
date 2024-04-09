<script lang="ts">
    // let hover_flag = false;
    // function unhover(event: MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement; }) {
	// 	event.currentTarget.textContent = "The Serendipity Scheme";
	// }

	// function hover(event: MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement; }) {
	// 	event.currentTarget.textContent = 
    //             event.currentTarget.textContent?.toLowerCase().split('').map(function(c){return Math.random() < .5? c : c.toUpperCase();}).join('') as string | null;
	// }
</script>
<div class="relative h-svh">
    <div class="w-full h-5/6 relative bg-radial-red" id="title">
        <div class="bg-star absolute left-1/2 top-0 -translate-x-1/2 z-10 h-full w-full min-w-1200 opacity-10 bg-10 panner"></div>
        <div class="bg-radial-transparent absolute left-0 top-0 w-full h-full opacity-90 z-20"></div>
        <h1 class="h1 z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold scale-150 text-center bounce">The Serendipity Scheme</h1>
    </div>
    <div class="absolute z-30 left-1/2 -translate-x-1/2 -translate-y-5 h-28 min-h-24 w-full min-w-2000 clippy clippy-shadow stripes hidden md:block mb-52" id="nav">
        <div class="text-center h-full w-full flex items-center justify-center flex-wrap">
            <a href="#mission" class="anchor h3 mr-2 text-slate-700 hover:text-black hover:no-underline">Our Mission</a><span> | </span>
            <a href="#us" class="anchor h3 mx-2 text-slate-700 hover:text-black hover:no-underline">Meet The Team</a><span> | </span>
            <a href="#submissions" class="anchor h3 mx-2 text-slate-700 hover:text-black hover:no-underline">How to Submit</a><span> | </span>
            <a href="/p/random" class="anchor h3 text-red-500 ml-2 hover:text-red-800 hover:no-underline">View a Random Work</a>
        </div>
    </div>
    <div class="block md:hidden absolute z-30 left-1/2 -translate-x-1/2 -translate-y-5 h-56 min-h-52 w-full min-w-2000 clippy clippy-shadow stripes mb-52">
        <ul class="text-center h-full w-full flex flex-col items-center justify-center flex-wrap">
            <li>
                <a href="#mission" class="anchor h3 mr-2">Our Mission</a>
            </li>
            <li>
                <a href="#us" class="anchor h3 mx-2">About Us</a>
            </li>
            <li>
                <a href="#submissions" class="anchor h3 mx-2">How to Submit</a>
            </li>
            <li>
                <a href="/p/random" class="anchor h3 text-red-500 ml-2">View a Random Work</a>
            </li>
        </ul>
    </div>
    <div id="mission" class="w-full mb-8 relative left-1/2 -translate-x-1/2 z-40 translate-y-28 text-slate-800">
        <h2 class="h2 font-semibold ml-4">Our <span class="text-pink-600 italic">Mission</span></h2>
        <hr class="w-1/4 ml-6 my-4 text-slate-400" />
        <p class="w-full md:w-1/2 ml-4 text-lg">
            <span class="italic md:hover:text-pink-600">The Serendipity Scheme</span> was dreamed up to provide Whatcom County teens with an accessible, stress-free way to promote their creativity. By uploading their art and writing on our website and distributing QR codes linked to it, young artists and writers have the opportunity to engage with the broader community and receive recognition and support back from it. As creatives ourselves, we understand how daunting sharing your voice with the world can be, but we also know that the only way to gain confidence and improve our craft is by taking that first step out into the world! Our mission is to cultivate a simple, and serendipitous platform that highlights teen imagination, offers an inspiring surprise to anyone who stumbles upon us, and makes Whatcom County just a little bit brighter. 
        </p>
    </div>
    <div id="us" class="w-full mb-8 relative left-1/2 -translate-x-1/2 z-40 translate-y-28 text-slate-800">
        <h2 class="h2 font-semibold ml-4">About <span class="text-orange-600 italic">Us</span></h2>
        <hr class="w-1/4 ml-6 my-4 text-slate-400" />
        <p class="w-full md:w-1/2 ml-4 text-lg">
            lots of brain damage mostly :D
        </p>
    </div>
    <div id="submissions" class="w-full h-1/2 relative left-1/2 -translate-x-1/2 z-40 translate-y-28 text-slate-800">
        <h2 class="h2 font-semibold ml-4">Submit <span class="text-red-600 italic">Your</span> Work</h2>
        <hr class="w-1/4 ml-6 my-4 text-slate-400" />
        <p class="w-full md:w-1/2 ml-4 text-lg">
            idk just ask nicely enough and i'll let you in. you can also give me $20 and i'll put anything up
        </p>
    </div>
</div>
<style>
    @keyframes panna_cotta {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 100%;
        }
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
    @media(min-width: 768px) {
        .bounce {
            animation: bouncy 4s ease-in-out infinite;
        }
        @keyframes bouncy {
            0% {
                translate: 0 0;
            }
            50% {
                translate: 0 -10px;
            }
            100% {
                translate: 0 0;
            }
        }
    }
</style>