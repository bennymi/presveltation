<script lang="ts">
	import hljs from 'highlight.js';

	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props (functionality)
	/** Set the Highlight.js language used for syntax highlighting. */
	export let language: string = 'plaintext';
	/** Provide the code as a string. */
	export let code: string = '';
	/** Provide lines that should be highlighted. Ranges are accepted, e.g.: '1-5, 8, 10-12, 42'. */
	export let highlightLines: string = '';
	/** TODO */
	// export let addedLines: string = '';
	/** TODO */
	// export let removedLines: string = '';
	/** Set focus type. */
	export let focusType: 'blur' | 'highlight' = 'blur';
	/** Show header. */
	export let showHeader: boolean = true;
	/** Set header text. Is the same as the language by default. */
	export let headerText: string = language.toUpperCase();
	/** Show line numbers. */
	export let showLineNumbers: boolean = true;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background: string = 'bg-gray-900';
	/** Provide classes to set the header style (background / text-color / etc). */
	export let headerClasses: string = 'bg-gray-800 text-white/80 text-xs font-bold';
	/** Provide classes to set the text size. */
	export let text: string = 'text-sm';
	/** Provide classes to set the default code text color. */
	export let textColor: string = 'text-white';
	/** Provide classes to set the border radius. */
	export let rounded: string = 'rounded-lg';
	/** Provide classes to set dimensions of the code block. */
	export let dimensions: string = 'max-h-96 max-w-3xl';
	/** Provide classes to set highlight color. */
	export let highlightColor: string = 'bg-gray-200/10';

	// Local variables
	let copyState = false;
	let hiddenCode: string = hljs.highlight(code, { language }).value.trim();
	let highlightedLinesList: number[] = [];
	let blur = focusType === 'blur';
	let preElement: HTMLElement | null = null;
	let lineElement: HTMLElement | null = null;
	let lines: string[] = [];

	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(String(code));

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);

		/** @event {{}} copy - Fire event when code is copied.  */
		dispatch('copy', {});
	};

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
		return (
			focusType === 'blur' &&
			blur &&
			highlightedLinesList.length > 0 &&
			highlightedLinesList.indexOf(line) === -1
		);
	};

	$: applyHighlight = (line: number): boolean => {
		return focusType === 'highlight' && highlightedLinesList.indexOf(line) !== -1;
	};

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

	$: classesHeader = `${headerClasses} ${headerText}`;
	$: classesCodeBlock = `${dimensions} ${background} ${text} ${textColor} ${rounded}`;
</script>

{#if language && code}
	<div class="code-block flex flex-col {classesCodeBlock}">
		<!-- Header -->
		{#if showHeader}
			<header
				class="code-block-header rounded-t-lg flex justify-between items-center p-2 pl-4 {classesHeader}"
			>
				<!-- Language Text -->
				<span class="code-block-language">{headerText}</span>

				<!-- Copy Button -->
				<button
					class="code-block-btn px-2 py-1 rounded-lg transition-all duration-200 text-white/70 hover:text-white/95"
					on:click={handleCopy}
				>
					{#if copyState}
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm-4 4q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22Z"
							/></svg
						>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
							/></svg
						>
					{/if}
				</button>
			</header>
		{/if}

		<!-- This element is hidden. We are only using it to bind it to a variable which has the correct childNodes of the code that should be displayed.
		The other method of creating a new element with document.createElement('div') and setting the innerHTML of it did not work, so this is a hack. -->
		<pre class="hidden"><code bind:this={preElement} class="code-block-code language-{language}"
				>{@html hiddenCode}</code
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
									? 'text-white/30'
									: 'text-white/90'}"
							>
								{i}
							</div>
						{/if}
						<!-- Code -->
						<div
							class="transition-all {showLineNumbers
								? 'pl-12'
								: 'pl-2'} duration-200 ease-in {applyBlur(i) ? 'blur-[0.095rem] opacity-60' : ''}"
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
