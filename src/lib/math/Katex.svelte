<!-- Source: https://svelte.dev/repl/49ff6c089825418888cf804d9dde77bc?version=3 -->
<script lang="ts">
	import katex from 'katex';

	export let math: string;
	export let displayMode: boolean = false;

	const options = {
		displayMode: displayMode,
		trust: true, // so we can add htmlClass
		strict: false,
		throwOnError: false
	};

	$: katexString = katex.renderToString(math, options);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

{@html katexString}
