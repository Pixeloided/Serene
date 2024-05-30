<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1 class="h1 font-semibold">{$page.data.title}</h1>
<h4 class="h4 italic">By {$page.data.author}</h4>
{#if ($page.data.links)}
    <div class="flex flex-row">
        {#each $page.data.links.split(",") as link}
            <a href={link} class="anchor text-slate-700 decoration-blue-600" target="_blank">{link}</a>
        {/each}
    </div>
{/if}
{#if ($page.data.description)}
    <h3 class="h3">{$page.data.description}</h3>
{/if}
{#if ($page.data.content_type === "text")}
    <div>{@html $page.data.content}</div>
{:else if ($page.data.content_type === "image")}
    <img src={$page.data.content} alt={$page.data.title} class="pointer-events-none" />
{/if}