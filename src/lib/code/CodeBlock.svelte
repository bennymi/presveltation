<script lang="ts">
	import hljs from 'highlight.js';

	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

	import { clipboard } from '$lib/actions/clipboard';

	const dispatch = createEventDispatcher();

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language: string = 'plaintext';
	/** Provide the code to render. Be mindful to escape as needed! */
	export let code: string = '';
	/** Provide lines that should be highlighted. Should be a string, e.g.: '1-5, 8, 10-12, 42'. */
	export let highlightLines: string = '';
	/** Provide lines that should be collapsed. Only accepts ranges, e.g.: '1-5, 10-13'. */
	// export let collapseLines: string = '';
	/** TODO */
	// export let addedLines: string = '';
	/** TODO */
	// export let removedLines: string = '';
	/** Set focus type. */
	export let focusType: 'blur' | 'highlight' = 'blur';
	/** Show header. */
	export let showHeader: boolean = false;
	/** Set header text. Is the same as the language by default. */
	export let headerText: string = language;
	/** Show line numbers. */
	export let showLineNumbers: boolean = true;

	// Props (styles)
	/** Provided classes to set the background color. */
	export let background: string = 'bg-gray-900'; // 'bg-[#141517]';
	/** Provided classes to set the text size. */
	export let text: string = 'text-sm';
	/** Provided classes to set the text color. */
	export let color: string = 'text-white';
	/** Provided classes to set the border radius. */
	export let rounded: string = 'rounded-lg';
	/** Provide classes to set dimensions of the code block. */
	export let dimensions: string = 'max-h-96 max-w-3xl';
	/** Provide classes to set highlight color. */
	export let highlightColor: string = 'bg-gray-200/10';
	/** Provided classes to set the button styles. */
	// export let buttonCopy = 'bg-white/5 hover:bg-white/10';

	// Base Classes
	// const cBase = 'overflow-hidden shadow';
	// const cBase = 'max-h-96 max-w-lg';
	const cBase = '';
	const cHeader = 'text-xs uppercase flex justify-between items-center p-2 pl-4';
	// const cPre = 'whitespace-pre-wrap break-all p-4 pt-1';
	// const cPre = 'whitespace-pre-wrap break-all';
	const cPre = '';

	// Type
	type CollapsedRange = {
		start: number;
		end: number;
		show: boolean;
	};

	// Local
	let displayCode: string = hljs.highlight(code, { language }).value.trim();
	let copyState = false;
	let highlightedLinesList: number[] = [];
	// let collapsedLinesList: CollapsedRange[] = [];
	let blur = focusType === 'blur';

	//
	let preElement: HTMLElement | null = null;
	let lineElement: HTMLElement | null = null;
	let lines: string[] = [];

	// Handle Copy Text
	function onCopyClick() {
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
		/** @event {{}} copy - Fires when the Copy button is pressed.  */
		dispatch('copy', {});
	}

	const arrayRange = (start: number, stop: number) =>
		Array.from({ length: stop - start }, (value, index) => start + index);

	// Handle hover
	$: disableBlur = (line: number) => {
		if (focusType === 'blur' && highlightedLinesList.indexOf(line) === -1) {
			blur = false;
		}
	};

	// Check if blur should be applied to line
	$: applyBlur = (line: number): boolean => {
		if (
			focusType === 'blur' &&
			blur &&
			highlightedLinesList.length > 0 &&
			highlightedLinesList.indexOf(line) === -1
		) {
			return true;
		}

		return false;
	};

	$: applyHighlight = (line: number): boolean => {
		if (focusType === 'highlight' && highlightedLinesList.indexOf(line) !== -1) {
			return true;
		}

		return false;
	};

	/* $: toggleCollapse = (line: number): void => {
		const index = collapsedLinesList.findIndex((range) => range.start === line);

		if (index !== -1) {
			collapsedLinesList[index] = {
				...collapsedLinesList[index],
				show: !collapsedLinesList[index].show
			};
		}
	};

	$: collapseLine = (line: number): boolean => {
		collapsedLinesList.forEach(({ start, end, show }) => {
			if (line > start && line < end && !show) {
				console.log('collapseLine', line);
				return true;
			}
		});

		return false;
	}; */

	$: if (highlightLines) {
		// Determine which lines should be highlighted.
		const splitHighlights: string[] = highlightLines.replace(/\s/g, '').split(',');

		splitHighlights.forEach((range) => {
			const splitRange: string[] = range.split('-');

			if (splitRange.length === 2) {
				highlightedLinesList = [
					...highlightedLinesList,
					...arrayRange(parseInt(splitRange[0]), parseInt(splitRange[1]) + 1)
				];
			} else {
				highlightedLinesList = [...highlightedLinesList, parseInt(splitRange[0])];
			}
		});
	}

	/* $: if (collapseLines) {
		// Determine which lines should be collapsed.
		const splitHighlights: string[] = highlightLines.replace(/\s/g, '').split(',');

		splitHighlights.forEach((range) => {
			const splitRange: string[] = range.split('-');

			if (splitRange.length === 2) {
				const range: CollapsedRange = {
					start: parseInt(splitRange[0]),
					end: parseInt(splitRange[1]),
					show: false
				};

				collapsedLinesList = [...collapsedLinesList, range];
			}
		});

		console.log('collapseLines', collapsedLinesList);
	} */

	$: {
		// Take the code and turn it into individual lines without losing the highlighting from hljs.
		if (browser) {
			lineElement = document.createElement('div');

			preElement?.childNodes.forEach((node) => {
				if (node.nodeName === 'SPAN' && node.innerHTML.includes('\n')) {
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
					// console.log('#text', node);
					let newNode = node.cloneNode();
					newNode.innerHTML = node.innerHTML;
					lineElement.appendChild(newNode);
				}
			});

			// Split element into array of lines and make sure that next lines characters that were removed by the split are not ignored (simply replace '' with ' ').
			lines = lineElement.innerHTML.split('\n');
			lines = lines.map((line) => (line === '' ? ' ' : line));
		}
	}

	// Reactive
	$: classesBase = `${cBase} ${dimensions} ${background} ${text} ${color} ${rounded} ${
		$$props.class ?? ''
	}`;
</script>

{#if language && code}
	<div class="code-block flex flex-col {classesBase}">
		<!-- Header -->
		{#if showHeader}
			<header class="code-block-header {cHeader} {rounded} {background}">
				<!-- Language Text -->
				<span class="code-block-language text-white/60">{headerText}</span>

				<!-- Copy Button -->
				<button
					class="code-block-btn px-2 py-1 rounded-lg text-white/60 bg-white/10 hover:bg-white/20"
					on:click={onCopyClick}
					use:clipboard={code}
				>
					{!copyState ? 'Copy' : 'Copied ✓'}
				</button>
			</header>
		{/if}

		<!-- This element is hidden. We are only using it to bind it to a variable which has the correct childNodes of the code that should be displayed.
		The other method of creating a new element with document.createElement('div') and setting the innerHTML of it did not work, so this is a hack. -->
		<pre class="hidden"><code bind:this={preElement} class="code-block-code language-{language}"
				>{@html displayCode}</code
			></pre>

		<!-- Code display block -->
		{#if lines.length > 0}
			<div class="overflow-y-auto p-2">
				<!-- Lines -->
				{#each lines as line, i}
					<div
						class="svelte-tailwind-line-{i} relative {applyHighlight(i) ? highlightColor : ''}"
						on:mouseenter={() => disableBlur(i)}
						on:mouseleave={() => (blur = true)}
					>
						<!-- Line Numbers -->
						{#if showLineNumbers}
							<div
								class="absolute select-none w-10 pr-2 font-mono border-r-2 text-right border-gray-400 transition-all duration-300 ease-in {applyBlur(
									i
								)
									? 'text-gray-500'
									: 'text-white'}"
							>
								{i}
							</div>
						{/if}
						<!-- Code -->
						<div
							class="transition-all pl-12 duration-300 ease-in {applyBlur(i)
								? 'blur-[0.095rem] opacity-60'
								: ''}"
						>
							<pre class="whitespace-pre"><code class="language-{language}">{@html line}</code
								></pre>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}
