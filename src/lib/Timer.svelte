<script lang="ts">
	import { create_in_transition } from 'svelte/internal';

	let seconds: number = 0;
	let myInterval: ReturnType<typeof setInterval> | null = null;
	let isPaused: boolean = true;

	function pause() {
		clearInterval(myInterval!);
		isPaused = true;
	}

	function handleClick() {
		if (isPaused && !myInterval) {
			myInterval = setInterval(() => {
				seconds += 1;
			}, 1000);

			isPaused = false;
		} else if (isPaused) {
			isPaused = false;
		} else {
			pause();
		}
	}

	function spin(node, options) {
		const { times = 1 } = options;
		return {
			...options,
			css(t) {
				// Svelte takes care of applying the easing function.
				const degrees = 360 * times; // through which to spin
				return `transform: rotate(-${t * degrees}deg);`;
			}
		};
	}

	function animateSpin(node) {
		const n = 1;
		const d = 600;

		const intro = create_in_transition(node, spin, {
			duration: d * n,
			times: n
		});
		intro.start();
	}

	function handleReset(event: Event) {
		pause();
		// resetUpdate += 1;
		animateSpin(event.target);
		myInterval = null;
		seconds = 0;
	}

	const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

	$: displaySec = zeroPad(seconds % 60, 2);
	$: displayMin = zeroPad(Math.floor(seconds / 60), 2);
</script>

<div class="flex items-center justify-center gap-2">
	<button on:click={handleClick}>
		{#if isPaused}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-8 text-blue-500 hover:text-blue-700"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-8 text-red-500 hover:text-red-700"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M10 16q.425 0 .713-.288Q11 15.425 11 15V8.975q0-.425-.287-.7Q10.425 8 10 8t-.712.287Q9 8.575 9 9v6.025q0 .425.288.7Q9.575 16 10 16Zm4 0q.425 0 .713-.288Q15 15.425 15 15V8.975q0-.425-.287-.7Q14.425 8 14 8t-.712.287Q13 8.575 13 9v6.025q0 .425.288.7q.287.275.712.275Zm-2 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"
				/>
			</svg>
		{/if}
	</button>
	<button on:click={handleReset}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-8 text-gray-500 hover:text-gray-900"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M9.825 20.7q-2.575-.725-4.2-2.837Q4 15.75 4 13q0-1.425.475-2.713Q4.95 9 5.825 7.925q.275-.3.675-.313q.4-.012.725.313q.275.275.288.675q.012.4-.263.75q-.6.775-.925 1.7Q6 11.975 6 13q0 2.025 1.188 3.613q1.187 1.587 3.062 2.162q.325.1.538.375q.212.275.212.6q0 .5-.35.788q-.35.287-.825.162Zm4.35 0q-.475.125-.825-.175t-.35-.8q0-.3.213-.575q.212-.275.537-.375q1.875-.6 3.062-2.175Q18 15.025 18 13q0-2.5-1.75-4.25T12 7h-.075l.4.4q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275l-2.1-2.1q-.15-.15-.212-.325Q8.55 6.2 8.55 6t.063-.375q.062-.175.212-.325l2.1-2.1q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-.4.4H12q3.35 0 5.675 2.325Q20 9.65 20 13q0 2.725-1.625 4.85q-1.625 2.125-4.2 2.85Z"
			/>
		</svg>
	</button>
	<div class="text-2xl font-bold tracking-wide">
		{displayMin}:{displaySec}
	</div>
</div>
