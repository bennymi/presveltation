<script lang="ts">
	import { CodeBlock, type FocusBlock } from 'svhighlight';

	import { focusBlocksExample } from './codebits';

	let focusBlocks: FocusBlock[] = [
		{ lines: '', text: 'Unblur' },
		{ lines: '4, 8-12', text: '1: Define Focus Blocks' },
		{ lines: '1-3, 8, 14-16', text: '2: Set Max Steps for Slide' },
		{ lines: '3, 26', text: '3: Pass currStep store to CodeBlock' },
		{ lines: '27', text: `4: Specify the CodeBlock's dimensions` }
	];

	let focusButtonClasses: string =
		'flex-grow rounded-lg border-2 border-gray-900 px-2 py-1 text-sm font-bold text-gray-900 transition-all hover:bg-slate-900 hover:text-white hover:shadow-lg hover:shadow-blue-500 dark:bg-gray-300/80';
</script>

<h1>Dynamic Code Blocks</h1>

<a id="svhighlight"><h2>SvHighlight</h2></a>

<p>
	For including code blocks into your slides you can use the
	<a class="font-bold underline" href="https://github.com/bennymi/svhighlight"> SvHighlight </a> library.
	SvHighlight was build for this project, but was then published as a separate package. Head over to
	the SvHighlight documentation to see how to set it up and how you can customize it.
</p>

<br />

<CodeBlock code="pnpm add -D svhighlight" language="shell" showLineNumbers={false} />

<a id="focus-blocks"><h2>Add Step Focus Blocks</h2></a>

<p>
	You might want to highlight different sections of your code at different points in your
	presentation. You might also have a lot of code to display on your slide. Instead of spreading the
	code out to many different slides, SvHighlight allows us to specify "Focus Blocks". In focus
	blocks we can specify the lines we want to highlight and the line that should be scrolled into
	view.
</p>

<br />

<p>
	To make this work, we also need to tell the slide how many steps should exist on the slide, which
	we can do by simply updating the <code>$maxSteps</code> store value to the number of focus blocks
	we want to highlight on a slide (inside <code>onMount</code>). Next, we can pass the
	<code>currStep</code>
	store to SvHighlight's code block <code>activeFocusBlockStore</code> prop. If you have a lot of
	code and want a scrollbar to appear you also need to specify the <code>dimensions</code>. The
	focus blocks will then automatically update and scroll to the highlighted sections as you use the
	arrow keys on your slide.
</p>

<br />

<CodeBlock
	code={focusBlocksExample}
	{focusBlocks}
	{focusButtonClasses}
	showFocusButtons={true}
	language="svelte"
	showLineNumbers={true}
/>
