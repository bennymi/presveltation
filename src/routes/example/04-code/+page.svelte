<script lang="ts">
	// import Code from '$lib/CodeBlock/Code.svelte';
	// import Highlight from '$lib/Highlight/Highlight.svelte';
	// import LineNumbers from '$lib/Highlight/LineNumbers.svelte';
	import CodeBlock from '$lib/code/CodeBlock.svelte';
	// import '$lib/code/highlight.css';
	// import Prism from '$lib/CodeBlock/Prism.svelte';

	// import javascript from 'highlight.js/lib/languages/javascript';
	import 'highlight.js/styles/base16/dracula.css';

	import { addStepAnimation } from '$lib/addstepanimation';

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
	        /** Automatically check how many steps a node requires and update the store. */
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
	         */
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
	        /** Remove previously added active classes and reset the activeClast list. */
	        activeClasses.forEach((c: string) => node.classList.remove(c));
	        activeClasses = [];
	    }

	    const updateActiveClasses = () => {
	        /** Add all classes that are active during the current step
	         * to the activeClassese list.
	        */
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
	        // Find the step-related classes in the node classes, add them to a dictionary and update the maxSteps store with the largest step number
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
	<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mx-auto tracking-tighter">
		Easily display code blocks
	</h1>

	<!-- <div class="my-4">
		<Prism {code} language="javascript" />
	</div> -->
	<div class="my-8">
		<CodeBlock language="typescript" {code} />
	</div>

	<!-- <LineNumbers {highlighted} /> -->
	<!-- <Highlight language={javascript} {code} let:highlighted>
	</Highlight> -->

	<!-- <div class="my-8">
		<Code {code} language="typescript" />
	</div> -->
	<!-- <pre>
        <code class="language-javascript">
            {@html code}
        </code>
    </pre> -->
</div>
