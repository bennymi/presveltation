<script lang="ts">
	import { storeHighlightJs } from './stores';

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language = 'plaintext';
	/** Provide the code to render. Be mindful to escape as needed! */
	export let code = '';

	// Props (styles)
	/** Provided classes to set the background color. */
	export let background = 'bg-[#141517]';
	/** Provided classes to set the text size. */
	export let text = 'text-sm';
	/** Provided classes to set the text color. */
	export let color = 'text-white';
	/** Provided classes to set the border radius. */
	export let rounded = 'rounded-lg';
	/** Set the height of the code block. */

	// Base Classes
	const cBase = 'max-h-96 overflow-y-auto';

	// Local
	let formatted = false;
	let displayCode: string = code;
	let lines: number;

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs) {
		console.log('highlight js code');
		console.log($storeHighlightJs.highlight(code, { language }));
		displayCode = $storeHighlightJs.highlight(code, { language }).value;
		lines = displayCode.split(/\r\n|\r|\n/).length;
		formatted = true;
	}

	$: classesBase = `${cBase} ${background} ${text} ${color} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class={classesBase}>
	<!-- <pre class="whitespace-pre-wrap break-all p-4 pt-1"> -->
	<div class="grid grid-cols-12">
		<div class="col-span-1">
			{#each [...Array(lines + 1).keys()] as line}
				<div>{line}</div>
			{/each}
		</div>
		<pre class="col-span-11">
                <code class="language-{language}">
                    {#if formatted}
					{@html displayCode}
				{:else}
					{code.trim()}
				{/if}
                </code>
            </pre>
	</div>
</div>
