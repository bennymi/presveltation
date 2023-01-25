<script lang="ts">
	import CodeBlock from '$lib/code/CodeBlock.svelte';
	import 'highlight.js/styles/base16/dracula.css';
	// import 'highlight.js/styles/base16/monokai.css';

	import { addStepAnimation } from '$lib/addstepanimation';
	import { maxSteps, currStep } from '$lib/stores';
	import { onMount } from 'svelte';

	let highlightLines: string = '';

	let focusBlocks = [
		{ lines: '', text: 'Unblur' },
		// { lines: '0-3', text: 'Imports' },
		// { lines: '4,5', text: 'Use Element' },
		// { lines: '7-13', text: 'Apply Styles' }
		{ lines: '91-96', scrollLine: 91, text: '1: onInit()' },
		{ lines: '98-105', scrollLine: 92, text: '2: onInit()' },
		{ lines: '8-19', scrollLine: 6, text: 'updateMaxSteps()' },
		{ lines: '59-68', scrollLine: 57, text: 'updateActiveClasses()' }
	];

	onMount(() => {
		$maxSteps = focusBlocks.length - 1;
	});

	let svelteCode = `<script>
	import Nested from './Nested.svelte'
<\/script>

<p>These styles...</p>
<Nested/>

<${''}style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</${''}style>`;

	let code = `const updateMaxSteps = () => {
	/** Automatically check how many steps a node requires 
	  * and update the store. 
	 **/
	let value = get(maxSteps);
	stepAnimations.forEach((a: Animation) => {
		if (a.start > value) {
			value = a.start;
		}
	});
	maxSteps.set(value);
}`;

	let code2 = `
	export function addStepAnimation(node: HTMLElement, tailwindSteps: Tailwind[] | null=null) {
	let step: number = 0;
	let unsubscribe: Unsubscriber;
	let initialClasses: string[] = [];
	let stepClasses: string[] = [];
	let stepAnimations: Animation[] = [];
	let activeClasses: string[] = [];

	const updateMaxSteps = () => {
		/** Automatically check how many steps a node 
		  * requires and update the store. 
		 **/
		let value = get(maxSteps);
		stepAnimations.forEach((a: Animation) => {
			if (a.start > value) {
				value = a.start;
			}
		});
		maxSteps.set(value);
	}

	const setupAnimationsDictionary = () => {
		/** Create a list of Animation objects, so it's easier to loop through
		  * them and find the active steps later on.
		 **/
		stepClasses.forEach((c: string) => {
			const parts: string[] = c.split(':');
			const range: string[] = parts[0].split('-');
			const animation: Animation = {
				start: parseInt(range[1]),
				end: range.length === 3 ? parseInt(range[2]) : null,
				class: parts[1]
			};
			stepAnimations = [...stepAnimations, animation];
		});

		// Add the steps that were passed as an argument.
		tailwindSteps?.forEach((v) => {
			const range: string[] = v.step.split('-');
			const classes: string[] = v.classes.split(' ');
			classes.forEach((v) => {
				const animation: Animation = {
					start: parseInt(range[0]),
					end: range.length === 2 ? parseInt(range[1]) : null,
					class: v
				};
				stepAnimations = [...stepAnimations, animation];
			});
		});
	}

	const removePreviousAddedClasses = () => {
		/** Remove previously added active classes 
		  * and reset the activeClast list. 
		 **/
		activeClasses.forEach((c: string) => node.classList.remove(c));
		activeClasses = [];
	}

	const updateActiveClasses = () => {
		/** Add all classes that are active during the 
	      * current step to the activeClasses list.
		 **/
		stepAnimations.forEach((a: Animation) => {
			if (a.start === step || (a.end && a.start <= step && a.end >= step)) {
				activeClasses.push(a.class);
			}
		});
	}

	const addActiveClasses = () => {
		/** Add all active classes to the node. */
		activeClasses.forEach((c: string) => node.classList.add(c));
	}

	const logEverything = () => {
		/** This was just for testing purposes. */
		console.log('initialClasses', initialClasses);
		console.log('stepClasses', stepClasses);
		console.log('activeClasses', activeClasses);
		console.log('stepAnimations', stepAnimations);
		console.log('node.classList', node.classList.value);
	}

	const animateStep = () => {
		removePreviousAddedClasses();
		updateActiveClasses();
		addActiveClasses();
		// logEverything();
	}

	const onInit = () => {
		// Subscribe to changes in currStep and animate each step
		unsubscribe = currStep.subscribe(value => {
			step = value;
			animateStep();
		});

		/** Find the step-related classes in the node classes, add them to a dictionary 
		  * and update the maxSteps store with the largest step number */
		initialClasses = node.classList.value.split(' ');
		stepClasses = initialClasses.filter((c: string) => c.search(/step-[\d]+(-\d+)?:/) != -1);
		setupAnimationsDictionary();
		updateMaxSteps();
		animateStep();
	}

	onInit();

	return {
		destroy() {
			unsubscribe();
		}
	};
}
	`;
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen">
	<h1
		class="font-sans font-black text-neutral-900 text-5xl text-center mx-auto tracking-tighter animate__animated step-0:animate__fadeInDown"
		use:addStepAnimation
	>
		Easily step through code blocks
	</h1>

	<div
		class="my-8 w-full flex justify-center animate__animated step-0:animate__fadeInUp"
		use:addStepAnimation
	>
		<CodeBlock
			language="typescript"
			code={code2}
			{highlightLines}
			{focusBlocks}
			showHeader={true}
			showFocusButtons={true}
			showLineNumbers={true}
			activeFocusBlockStore={currStep}
		/>
	</div>
</div>
