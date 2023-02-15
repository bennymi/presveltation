<script>
	import { CodeBlock } from 'svhighlight';

	let folderStructure = `
src/routes/ 
    |- (slides)/
        |- slide 1/                 <- These are your slide folders / pages
            |- notes/
                |- +page.svelte     <- Notes go into a sub-folder
            |- +page.svelte
        |- slide 2/
            |- notes/
                |- +page.svelte
            |- +page.svelte
        |- +layout.svelte           <- Slide layout (import Deck here)
        |- +page.svelte             <- Starting slide at route "/"
    |- (notes)/
        |- notes/
            |- +layout.svelte       <- Notes layout (import Speaker here)
            |- +page.svelte         <- Notes page (can be left empty)
    `;
</script>

<h1>Getting Started</h1>

<p class="s">
	SvelteShow is a library that makes it easy to create fun and dynamic presentations / slideshows
	with SvelteKit and TailwindCSS. Check out a demo presentation here:
	<a href="/example/00-intro" class="font-bold underline">Demo / Example</a>.
</p>

<CodeBlock code="pnpm add -D svelte-show" language="shell" showLineNumbers={false} />

<h2>Project Structure</h2>

<CodeBlock code={folderStructure} language="shell" showLineNumbers={false} showHeader={false} />
