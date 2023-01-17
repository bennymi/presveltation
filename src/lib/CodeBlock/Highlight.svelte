<script context="module" lang="ts">
	import type { LanguageFn } from 'highlight.js';
	export interface Language {
		name?: string;
		register: LanguageFn;
	}
	export interface Slots {
		default: {
			/**
			 * The highlighted HTML as a string.
			 * @example "<span>...</span>"
			 */
			highlighted: string;
		};
	}
	export interface Events {
		highlight: CustomEvent<{
			/**
			 * The highlighted HTML as a string.
			 * @example "<span>...</span>"
			 */
			highlighted: string;
		}>;
	}
</script>

<script lang="ts">
	interface $$Slots extends Slots {}
	interface $$Events extends Events {}
	export let language: string;
	export let code: any;
	export let langtag = false;
	let highlighted = '';
</script>

<slot {highlighted}>
	<pre class:langtag data-language={language || 'plaintext'} {...$$restProps}><code class="hljs"
			>{#if highlighted !== undefined}{@html highlighted}{:else}{code}{/if}</code
		></pre>
</slot>

<style>
	.langtag {
		position: relative;
	}
	.langtag::after {
		content: attr(data-language);
		position: absolute;
		top: 0;
		right: 0;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		background: inherit;
		color: inherit;
		background: var(--langtag-background);
		color: var(--langtag-color);
		border-radius: var(--langtag-border-radius);
	}
</style>
