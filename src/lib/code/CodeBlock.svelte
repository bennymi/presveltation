<script lang="ts">
	import hljs from 'highlight.js';

	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

	import { clipboard } from '$lib/actions/clipboard';

	const dispatch = createEventDispatcher();

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language = 'plaintext';
	/** Provide the code to render. Be mindful to escape as needed! */
	export let code = '';

	export let highlightLines: number[] = [1, 2, 3, 4];

	// Props (styles)
	/** Provided classes to set the background color. */
	export let background = 'bg-gray-900'; // 'bg-[#141517]';
	/** Provided classes to set the text size. */
	export let text = 'text-sm';
	/** Provided classes to set the text color. */
	export let color = 'text-white';
	/** Provided classes to set the border radius. */
	export let rounded = 'rounded-lg';
	/** Provided classes to set the button styles. */
	// export let buttonCopy = 'bg-white/5 hover:bg-white/10';

	// Base Classes
	const cBase = 'overflow-hidden shadow';
	const cHeader = 'text-xs uppercase flex justify-between items-center p-2 pl-4';
	// const cPre = 'whitespace-pre-wrap break-all p-4 pt-1';
	const cPre = 'whitespace-pre-wrap break-all';

	// Local
	let displayCode: string = hljs.highlight(code, { language }).value.trim();
	let copyState = false;

	//
	let preElement: HTMLElement | null = null;
	let lineElement: HTMLElement | null = null;
	let lines: string[] = [];

	// Allow shorthand 'js' alias for Javascript
	function languageFormatter(lang: string): string {
		if (lang === 'js') return 'javascript';
		return lang;
	}

	// Handle Copy Text
	function onCopyClick() {
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
		/** @event {{}} copy - Fires when the Copy button is pressed.  */
		dispatch('copy', {});
	}

	$: {
		if (browser) {
			lineElement = document.createElement('div');

			preElement?.childNodes.forEach((node, i) => {
				// console.log(`${i} NODE:`, node);

				if (node.nodeName === 'SPAN' && node.innerHTML.includes('\n')) {
					// console.log(`NODE ${i}:`, node);
					const splitLines: string[] = node.innerHTML.split('\n');

					splitLines.forEach((s, i) => {
						let newNode = node.cloneNode();
						newNode.innerHTML = s;
						lineElement?.appendChild(newNode);

						if (i !== splitLines.length - 1) {
							lineElement?.appendChild(document.createTextNode('\n'));
						}
					});
				} else {
					let newNode = node.cloneNode();
					newNode.innerHTML = node.innerHTML;
					lineElement.appendChild(newNode);
				}
			});

			lines = lineElement.innerHTML.split('\n');
			/* console.log('LINE', lineElement);
			console.log('LINE.innerHTML\n', lineElement.innerHTML);
			console.log('LINES', lines); */
		}
	}

	// Reactive
	$: classesBase = `${cBase} ${background} ${text} ${color} ${rounded} ${$$props.class ?? ''}`;
</script>

{#if language && code}
	<div class="code-block {classesBase}">
		<!-- Header -->
		<header class="code-block-header {cHeader} {background} sticky top-0">
			<!-- Language -->
			<span class="code-block-language text-white/60">{languageFormatter(language)}</span>

			<!-- Copy Button -->
			<button
				class="code-block-btn px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
				on:click={onCopyClick}
				use:clipboard={code}
			>
				{!copyState ? 'Copy' : 'Copied ✓'}
			</button>
		</header>

		<!-- Pre/Code -->
		<pre class="hidden {cPre}"><code
				bind:this={preElement}
				class="code-block-code language-{language}">{@html displayCode}</code
			></pre>

		{#if lines.length > 0}
			<div class="p-4 pt-1">
				{#each lines as line, i}
					<div class="flex">
						<div
							class="select-none w-7 pr-2 font-mono border-r-2 text-right border-gray-400 {highlightLines.indexOf(
								i
							) !== -1
								? 'text-white'
								: 'text-gray-400'}"
						>
							{i}
						</div>
						<div
							class="w-full {highlightLines.indexOf(i) !== -1
								? ''
								: 'blur-[0.095rem] opacity-60 select-none'}"
						>
							<pre class="pl-2"><code class="language-{language}">{@html line}</code></pre>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}
