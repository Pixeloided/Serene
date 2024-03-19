<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center text-center content-center">
</div>

<div class="flex flex-col items-center content-center">
    <div class="relative inline-block lg:-translate-y-8">
        <img src="https://buckley.ssce.me/Splash.png" alt="paint stroke background" class="z-0 block" draggable={false}/>
        <h1 class="text-6xl text-center mt-0 z-10 font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full">{$page.status}</h1>
        <h2 class="text-3xl text-center mt-0 z-10 font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{$page.error?.message}</h2>
    </div>
</div>