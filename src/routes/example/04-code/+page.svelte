<script lang="ts">
	import { onMount } from 'svelte';

	import 'highlight.js/styles/base16/dracula.css';
	import { CodeBlock, type FocusBlock } from 'svhighlight';

	import { addStepAnimation } from '$lib/addstepanimation';
	import { maxSteps, currStep } from '$lib/stores';

	import { code } from './svhighlight-code';

	let highlightLines: string = '';

	let focusBlocks: FocusBlock[] = [
		{ lines: '', text: 'Unblur' },
		{ lines: '91-96', scrollLine: 91, text: '1: onInit()' },
		{ lines: '98-105', scrollLine: 92, text: '2: onInit()' },
		{ lines: '8-19', scrollLine: 6, text: 'updateMaxSteps()' },
		{ lines: '59-68', scrollLine: 57, text: 'updateActiveClasses()' }
	];

	onMount(() => {
		$maxSteps = focusBlocks.length - 1;
	});
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<h1
		class="animate__animated step-0:animate__fadeInDown mx-auto text-center font-sans text-5xl font-black tracking-tighter text-neutral-900"
		use:addStepAnimation
	>
		Add interactive code blocks with
		<a
			href="https://github.com/bennymi/svhighlight"
			class="bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
		>
			SvHighlight
		</a>
	</h1>

	<div
		class="animate__animated step-0:animate__fadeInUp my-8 flex w-full justify-center"
		use:addStepAnimation
	>
		<CodeBlock
			language="typescript"
			{code}
			{highlightLines}
			{focusBlocks}
			showHeader={true}
			showFocusButtons={true}
			showLineNumbers={true}
			activeFocusBlockStore={currStep}
			dimensions="h-96 w-1/2"
		/>
	</div>
</div>
