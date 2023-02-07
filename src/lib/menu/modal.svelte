<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: HTMLElement;

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable: Element[] = Array.from(nodes).filter((n) => (<HTMLElement>n).tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement!);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			(<HTMLElement>tabbable[index]).focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			(<HTMLElement>previously_focused).focus();
		});
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="fixed top-0 left-0 bottom-0 z-50 h-full w-full bg-gray-800/95"
	on:click|self={close}
	on:keydown
>
	<slot />
</div>

<!-- <div
	class="fixed top-0 left-0 bottom-0 z-10 h-full w-full bg-gray-800/95"
	on:click|self={close}
	on:keydown
/>

<slot /> -->
