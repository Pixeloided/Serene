<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    // import type { PageData } from './$types';
    $: innerWidth = 0;
    
    function launchEmailLink() {
        null;
    }

    // export let data: PageData;
    const update_name = (e: Event) => {
        // @ts-ignore 2339
        name_locked = e?.target?.value.length > 0 ? false : true;
    }
    const update_title = (e: Event) => {
        // @ts-ignore 2339
        title_locked = e?.target?.value.length > 0 ? false : true;
    }
    let name_locked: boolean = true;
    let title_locked: boolean = true;
</script>
<svelte:window bind:innerWidth />
<div class="stripes w-full top-0 mb-6">
    <h2 class="h2 text-center text-ss-teal py-4">Submission Form</h2>
</div>
<div class="ml-4 w-full md:w-1/2">
    <form class="mr-8">
        <Stepper>
            <Step stepTerm="Intro">
                <svelte:fragment slot="header">Introduction</svelte:fragment>
                <p><span class="font-bold">A big thank you for your interest in submitting your work!</span> let's get you started. Here's a quick list of what you'll need:</p>
                <ul class="list-disc ml-6">
                    <li>Your name</li>
                    <li>Title of your work</li>
                    <li>Optional- A short description of your work</li>
                    <li>An email</li>
                </ul>
            </Step>
            <Step locked={name_locked}>
                <svelte:fragment slot="header">First, what's your name?<span class="text-red-500">*</span></svelte:fragment>
                <input type="text" name="name" id="name" placeholder="John Doe" class="rounded-lg" required minlength="1" on:input={(e) => update_name(e)}/>
            </Step>
            <Step locked={title_locked}>
                <svelte:fragment slot="header">What's the title of your work?<span class="text-red-500">*</span></svelte:fragment>
                <input type="text" name="title" id="title" placeholder="Title" class="rounded-lg" required minlength="1" on:input={(e) => update_title(e)}/>
            </Step>
            <Step>
                <svelte:fragment slot="header">(Optional) Provide a short description for your work.</svelte:fragment>
                <textarea class="w-full rounded-lg" name="description" id="description" placeholder="Description"></textarea>
            </Step>
            {#if (innerWidth && innerWidth > 768)}
                <Step>
                    <svelte:fragment slot="header">Do you have access to the work on your phone?<span class="text-red-500">*</span></svelte:fragment>
                    <select name="phone" id="phone" class="rounded-lg">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Step>
            {:else}
                <Step>
                    <svelte:fragment slot="header">Final Step<span class="text-red-500">*</span></svelte:fragment>
                    <p>Please click the "complete" below to submit your work. It will open an email with your submission filled out. <span class="text-red-600">Please attach your work to the email before you send it. If you don't, your submission <span class="font-bold">will be rejected automatically.</span></span></p>
                </Step>
            {/if}
        </Stepper>
    </form>
    <a href="https://ssce.me/submit" target="_self" class="underline hover:text-ss-teal hover:no-underline text-ss-teal/90 font-semibold">click here</a>
</div>
<style>
    h2 {
        filter: drop-shadow(1px 1px 1px black);
    }
    @keyframes panna_cotta {
        0% {
            background-position: 0% 100%;
        }
        100% {
            background-position: 100% 0%;
        }
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
        filter: drop-shadow(0px 3px 6px black);
    }

</style>