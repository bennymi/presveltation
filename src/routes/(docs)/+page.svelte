<script>
	import { CodeBlock } from 'svhighlight';

	import { folderStructure, slidesLayout, notesLayout } from './codebits';
</script>

<h1>Getting Started</h1>

<p>
	SvelteShow is a library that makes it easy to create fun and dynamic presentations / slideshows
	with SvelteKit and TailwindCSS. Check out a demo presentation here:
	<a href="/example/00-intro" class="font-bold underline">Demo / Example</a>.
</p>

<br />

<CodeBlock code="pnpm add -D svelte-show" language="shell" showLineNumbers={false} />

<br />

<p>
	You also need to install <a
		class="font-bold underline"
		href="https://tailwindcss.com/docs/guides/sveltekit">TailwindCSS</a
	> for this library.
</p>

<h2>Project Structure</h2>

<p>
	The structure of the project should look something like shown below (you can find an example in
	the
	<a class="font-bold underline" href="https://github.com/bennymi/svelte-show/tree/main/src/routes">
		GitHub repo</a
	>). The individual folder structures are explained in more detail in the following sections.
</p>

<br />

<CodeBlock code={folderStructure} language="shell" showLineNumbers={false} showHeader={false} />

<!-- <br /> -->

<h2>Slides Folder</h2>

<p>
	Each slide is created by creating a new page. To create new slides we first need to set up the <span
		class="font-mono">(slides)/+layout.svelte</span
	>
	file. Here we need to import the <span class="font-mono">{'<Deck>'}</span> component, as well as
	the <span class="font-mono">$slides</span> store, and tell it what slides make up the presentation.
</p>

<br />

<p>
	<span class="font-mono">routes</span> tells the library which page to access to get to the slide.
	<span class="font-mono">title</span>
	is the name of the slide that will appear in the table of contents menu that you acn access by pressing
	the <kbd>m</kbd> key ("m" stands for "Menu"). <span class="font-mono">notes</span> is an optional
	<span class="font-mono">boolean</span>
	value that specifies, whether the slide has a <span class="font-mono">notes/+page.svelte</span> file.
</p>

<br />

<CodeBlock code={slidesLayout} language="svelte" headerText="(slides)/+layout.svelte" />

<h2>Notes Folder</h2>

<p>
	To create a note for a slide that will then be shown in the speaker's view create a sub-folder in
	the slide folder, called <span class="font-mono">notes/</span>, with a
	<span class="font-mono">+page.svelte</span> file.
</p>

<br />

<p>
	To make notes visible we first need to set up the <span class="font-mono"
		>(notes)/+layout.svelte</span
	>
	file. Here you need to import <span class="font-mono">Speaker</span> component, which renders the
	notes through an <span class="font-mono">iframe</span>. Once this is set up you can access the
	presentation notes by pressing the <kbd>s</kbd> key ("s" stands for "Speaker").
</p>

<br />

<CodeBlock code={notesLayout} language="svelte" headerText="(notes)/+layout.svelte" />
