<script lang="ts">
	export let applyBlur: boolean = false;
	export let showLineNumbers: boolean = false;
	export let lineNumber: number;
	export let line: string = '';
	export let language: string = 'plaintext';
</script>

<!-- Line Numbers -->
{#if showLineNumbers}
	<div
		class="absolute select-none w-10 pr-2 font-mono border-r-2 text-right border-gray-400 transition-all duration-300 ease-in {applyBlur
			? 'text-white/30'
			: 'text-white/90'}"
	>
		{lineNumber}
	</div>
{/if}
<!-- Code -->
<div
	class="transition-all {showLineNumbers ? 'pl-12' : 'pl-2'} duration-200 ease-in {applyBlur
		? 'blur-[0.095rem] opacity-60'
		: ''}"
>
	<pre class="whitespace-pre"><code class="language-{language}">{@html line}</code></pre>
</div>
