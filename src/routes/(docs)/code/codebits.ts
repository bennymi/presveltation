export let focusBlocksExample = `<script lang="ts">
    import { onMount } from 'svelte';

    // import a theme from highlight.js
    import 'highlight.js/styles/base16/dracula.css';

    import { maxSteps, currStep } from 'presveltation';
    import { CodeBlock, type FocusBlock } from 'svhighlight';

    // you can also define the code in a separate .ts / .js file and import it
    let code = \`...\`;

    let focusBlocks: FocusBlock[] = [
        { lines: '', text: 'Step 0: No Blur (When entering the slide)' },
		{ lines: '1, 3-5', scrollLine: 0, text: 'Step 1: Import stuff' },
		{ lines: '10, 13-15', scrollLine: 10, text: 'Step 2: Use stuff' }
    ]

    onMount(() => {
		$maxSteps = focusBlocks.length - 1;
	});
</script>

<CodeBlock
    language="svelte"
    {code}
    {focusBlocks}
    showHeader={false}
    showFocusButtons={false}
    showLineNumbers={true}
    activeFocusBlockStore={currStep}
    dimensions="h-96 w-1/2"
/>`;