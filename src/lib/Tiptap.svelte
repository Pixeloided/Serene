<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit'
    import Document from '@tiptap/extension-document'
    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Typography from '@tiptap/extension-typography'
    import TextAlign from '@tiptap/extension-text-align'
  
    let element: any;
    let editor: any;
  
    onMount(() => {
      editor = new Editor({
        element: element,
        extensions: [
          StarterKit,
          Typography,
          Text,
          Paragraph,
          Document,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
        ],
        content: `<p>Go ahead and put some content in here! Plenty of rich text formatting options are available- often analogous to Google Docs key binds. The editor will automatically resize as you type.</p>`,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-2 border-black rounded-2xl min-h-56 p-2 mb-4'
            }
        },
        onTransaction: () => {
          // force re-render so `editor.isActive` works as expected
          editor = editor
        },
      })
    })
  
    onDestroy(() => {
      if (editor) {
        editor.destroy()
      }
    })
</script>
  
<div bind:this={element} />