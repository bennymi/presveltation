<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import { storesEx, slidesEx, currSlideEx, maxStepsEx, currStepEx } from './codebits';
</script>

<h1>Stores</h1>

<p>
	There are a couple of stores that you can access. These stores use the
	<a
		target="_blank"
		rel="noopener noreferrer"
		class="underline"
		href="https://github.com/joshnuss/svelte-local-storage-store"
	>
		<code>svelte-local-storage-store</code>
	</a> package to also write to local storage, but you can interact with them in the same way as you
	would with any Svelte store.
</p>

<br />

<CodeBlock code={storesEx} language="svelte" />

<h2 id="slides">Slides</h2>

<p>
	The <code>slides</code> store allows you to access the slides you define in the root layout file,
	as described in the <a class="font-bold underline" href="/">Getting Started</a> page.
</p>

<br />

<CodeBlock code={slidesEx} language="svelte" />

<h2 id="curr-slide">Current Slide</h2>

<p>
	<code>currSlide</code> holds the index (a number value) representing the current active slide. You
	can use it in combination with <code>slides</code> to get information about the current slide.
</p>

<br />

<CodeBlock code={currSlideEx} language="svelte" />

<h2 id="max-steps">Max Steps</h2>

<p>
	<code>maxSteps</code> can be used to set the number of steps you want to have per slide in the
	<code>onMount</code> function.
</p>

<br />

<CodeBlock code={maxStepsEx} language="svelte" />

<h2 id="curr-step">Current Step</h2>

<p>
	The <code>currStep</code> store can be used to check which step you are on in a slide. This store
	gets reset back to <code>0</code> when entering a new slide. You can for example use the store to do
	different things at different steps in your presentation.
</p>

<br />

<CodeBlock code={currStepEx} language="svelte" />
