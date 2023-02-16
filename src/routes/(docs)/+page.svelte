<script>
	import { CodeBlock } from 'svhighlight';

	import { tailwindConfig, folderStructure, slidesLayout, notesLayout } from './codebits';
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
	>
	for this library. You might also need to update your <code>tailwind.config.cjs</code> file as follows,
	to make sure that this library gets processed properly by Tailwind:
</p>

<br />

<CodeBlock
	code={tailwindConfig}
	language="typescript"
	highlightLines="4"
	focusType="highlight"
	headerText="tailwind.config.cjs"
/>

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
	Each slide is created by creating a new page. To create new slides we first need to set up the <code
		>(slides)/+layout.svelte</code
	>
	file. Here we need to import the <code>{'<Deck>'}</code> component, as well as the
	<code>$slides</code> store, and tell it what slides make up the presentation.
</p>

<br />

<p>
	<code>routes</code> tells the library which page to access to get to the slide.
	<code>title</code>
	is the name of the slide that will appear in the table of contents menu that you acn access by pressing
	the <kbd>m</kbd> key ("m" stands for "Menu"). <code>notes</code> is an optional
	<code>boolean</code>
	value that specifies, whether the slide has a <code>notes/+page.svelte</code> file.
</p>

<br />

<CodeBlock code={slidesLayout} language="svelte" headerText="(slides)/+layout.svelte" />

<h2>Notes Folder</h2>

<p>
	To create a note for a slide that will then be shown in the speaker's view create a sub-folder in
	the slide folder, called <code>notes/</code>, with a
	<code>+page.svelte</code> file.
</p>

<br />

<p>
	To make notes visible we first need to set up the <code>(notes)/+layout.svelte</code>
	file. Here you need to import <code>Speaker</code> component, which renders the notes through an
	<code>iframe</code>. Once this is set up you can access the presentation notes by pressing the
	<kbd>s</kbd> key ("s" stands for "Speaker"). If you did not create notes for a slide, the speaker's
	view will simply show a standard page with the slide number & title, as well as a small view of the
	slide.
</p>

<br />

<CodeBlock code={notesLayout} language="svelte" headerText="(notes)/+layout.svelte" />