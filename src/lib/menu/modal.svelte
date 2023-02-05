<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: HTMLElement;

	const handle_keydown = (e: KeyboardEvent) => {
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

<svelte:window on:keydown={handle_keydown} />

<div
	class="fixed top-0 left-0 z-10 h-full w-full bg-gray-800/95"
	on:click|self={close}
	on:keydown
/>
<!-- w-[calc(100vw - 4em)] max-h-[calc(100vh - 4em)] max-w-lg -->
<!-- <div
	class="absolute left-1/2 top-1/2 z-50 w-fit -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-gray-800 bg-gray-800 p-4 shadow-lg shadow-gray-900"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<slot />
</div> -->

<slot />
