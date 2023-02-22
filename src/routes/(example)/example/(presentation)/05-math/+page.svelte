<script lang="ts" id="MathJax-script">
	import './math.css';

	import { addStepAnimation } from '$lib/addstepanimation';
	import { maxSteps, currStep } from '$lib/stores';

	import katex from 'katex';

	let equ = `E = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equE = `\\htmlClass{focusE}{E} = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equM = `E = \\sqrt{(\\htmlClass{focusM}{m}c^2)^2 + (pc)^2}`;
	let equC = `E = \\sqrt{(m\\htmlClass{focusC}{c}^2)^2 + (p\\htmlClass{focusC}{c})^2}`;
	let equP = `E = \\sqrt{(mc^2)^2 + (\\htmlClass{focusP}{p}c)^2}`;

	$: equations = [equ, equE, equM, equC, equP];

	$: {
		$maxSteps = equations.length - 1;
	}
	// $: currEquation = equations[$currStep];
	$: currEquation = katex.renderToString(equations[$currStep], {
		displayMode: true,
		trust: true,
		strict: false,
		throwOnError: false
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
	<h1
		class="animate__animated step-0:animate__fadeInLeft mx-auto mb-12 text-center font-sans text-5xl font-black tracking-tighter text-white"
		use:addStepAnimation
	>
		Math...
	</h1>
	<div
		class="animate__animated step-0:animate__fadeInRight flex items-center gap-20 text-2xl"
		use:addStepAnimation
	>
		<div class="text-white">
			{@html currEquation}
		</div>
		<div class="flex flex-col text-white">
			<div><span class="step-1:focusE" use:addStepAnimation>E</span>: energy</div>
			<div><span class="step-2:focusM" use:addStepAnimation>m</span>: mass</div>
			<div>
				<span class="step-3:focusC" use:addStepAnimation>c</span>: speed of light
			</div>
			<div>
				<span class="step-4:focusP" use:addStepAnimation>p</span>: momentum
			</div>
		</div>
	</div>
</div>
