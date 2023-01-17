<script context="module" lang="ts">
	import type { Props, Slots, Events } from './shared';
</script>

<script lang="ts">
	interface $$Props extends Props {}
	interface $$Slots extends Slots {}
	interface $$Events extends Events {}
	export let language: $$Props['language'];
	export let code: $$Props['code'];
	export let langtag = false;
	import hljs from 'highlight.js/lib/core';
	import { createEventDispatcher, afterUpdate } from 'svelte';
	import LangTag from './LangTag.svelte';
	import { browser } from '$app/environment';
	const dispatch = createEventDispatcher();
	let highlighted: string | any = '';
	afterUpdate(() => {
		if (highlighted) dispatch('highlight', { highlighted });
	});
	$: {
		hljs.registerLanguage('typescript', language);
		// highlighted = hljs.highlight(code, { language: 'typescript' }).value;

		highlighted = hljs.highlight(code, { language: 'typescript' });
		// console.log('higlighted:', highlighted);
		highlighted = highlighted.value;
		console.log(highlighted);

		if (browser) {
			let htmlObject = document.createElement('div');
			htmlObject.innerHTML = highlighted;
			// htmlObject.childNodes = [...htmlObject.childNodes, htmlObject.childNodes[0]]
			// htmlObject.app
			console.log(htmlObject);
			console.log(htmlObject.innerHTML);
			let allSpans = htmlObject.querySelectorAll('span[class*=hljs-]');
			console.log('SPANs:', allSpans);
			allSpans.forEach((node) => console.log(node.innerHTML));
		}

		// hljs.registerLanguage(language.name, language.register);
		// highlighted = hljs.highlight(code, { language: language.name }).value;
	}
</script>

<slot {highlighted}>
	<LangTag {...$$restProps} languageName={'javascript'} {langtag} {highlighted} {code} />
</slot>
