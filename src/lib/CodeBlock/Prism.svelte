<script lang="ts">
	import Prism from 'prismjs';
	import '$lib/CodeBlock/prism-vsc-dark-plus.css';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/line-highlight/prism-line-highlight';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

	import { onMount } from 'svelte';

	export let code: string = '';
	export let language: string = '';

	onMount(() => {
		Prism.highlightAll();
	});

	// $: html = Prism.highlight(code, Prism.languages[language]);
	// $: console.log(html.split('\n').length);
	// $: console.log(html.split('\n')[5]);
	// $: console.log(html);
	// $: newHTML = html
	// 	.split('\n')
	// 	.map((line: string, i: number) => `<div class="line-${i}">${line}</div>`);
	// $: console.log(newHTML);
</script>

{#if code && language}
	<div class="">
		<!-- <pre class="language-{language} rounded-lg">
			{@html html}
		</pre> -->
		<!-- <pre class="language-{language}">
			<code class="line-numbers">
				{@html Prism.highlight(code, Prism.languages[language])}
			</code>
        </pre> -->
		<pre class="line-numbers" data-line="1-5">
			<code class="language-{language}">{code}</code>
		</pre>
	</div>
{/if}
