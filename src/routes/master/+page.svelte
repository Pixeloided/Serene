<script lang="ts">
    import Tiptap from '$lib/Tiptap.svelte';
    import { FileDropzone } from '@skeletonlabs/skeleton';
    // import type { PageData } from './$types';
    
    // export let data: PageData;
    let files: FileList;
    let type = "text"
    let fileName: string;
    function changeType(e: any) {
        type = e.target.value;
    }
    function uploadFileChange(e: Event) {
        // @ts-ignore: 2339
        fileName = e.target?.files[0].name;
    }
</script>
<div class="ml-4 mt-4">
    <h2 class="h2 font-bold">Upload Content</h2>
    Or, <a class="anchor decoration-blue-600 text-slate-700" href="/master/manage">Manage Existing Posts</a>
    <hr class="w-1/3 my-2"/>
</div>
<form class="w-full md:ml-4 md:w-1/2">
    <label class="label">
        <span>Author Name</span><span class="text-red-600">*</span>
        <br />
        <input class="input border-2 rounded-2xl" type="text" placeholder="Full Name" required={true} />
    </label>
    <label class="label">
        <span>External Links to Author</span>
        <br />
        <input class="input border-2 rounded-2xl" type="text" placeholder="Links (seperate with commas)" />
    </label>
    <label class="label">
        <span>Title</span><span class="text-red-600">*</span>
        <br />
        <input class="input border-2 rounded-2xl" type="text" placeholder="Title of Content" required={true} />
    </label>
    <label class="label">
        <span>Description</span>
        <br />
        <textarea class="textarea border-2 rounded-2xl" rows="2" placeholder="Description of Content" />
    </label>
    <label class="label">
        <span>Content Type</span><span class="text-red-600">*</span>
        <br />
        <select class="select border-2 rounded-2xl" id="content-type" name="content-type" on:change={changeType} required={true}>
            <option value="text">Text Document</option>
            <option value="image">Image</option>
        </select>
    </label>
    {#if type == "image"}
        <span>Upload Image</span><span class="text-red-600">*</span>
        <br />
        <div class="mb-4">
            <FileDropzone name="files" bind:files={files} on:change={uploadFileChange}>
                <svelte:fragment slot="message">
                    {#if fileName}
                        Uploaded <span class="font-bold">{fileName}</span>
                    {:else}
                        <span class="font-bold">Upload a File</span> or drop it here.
                    {/if}
                </svelte:fragment>
            </FileDropzone>
        </div>
    {:else if type == "text"}
        <span>Content</span><span class="text-red-600">*</span>
        <br />
        <Tiptap />
    {/if}
    <div class="text-center w-full mb-4">
        <button type="button" class="btn bg-green-500 rounded-2xl w-1/3 mr-2">📋 Submit</button>
        <button type="button" class="btn bg-blue-500 rounded-2xl w-1/3 ml-2">👁️ Preview</button>
    </div>
</form>