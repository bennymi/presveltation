<script lang="ts">
	import { addSteps } from '$lib/addsteps';
	import { maxSteps, currStep } from '$lib/stores';

	import Katex from '$lib/math/Katex.svelte';

	import './math.css';

	let equ = `E = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equE = `\\htmlClass{focusE}{E} = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equM = `\\htmlClass{focusE}{E} = \\sqrt{(\\htmlClass{focusM}{m}c^2)^2 + (pc)^2}`;
	let equC = `\\htmlClass{focusE}{E} = \\sqrt{(\\htmlClass{focusM}{m}\\htmlClass{focusC}{c}^2)^2 + (p\\htmlClass{focusC}{c})^2}`;
	let equP = `\\htmlClass{focusE}{E} = \\sqrt{(\\htmlClass{focusM}{m}\\htmlClass{focusC}{c}^2)^2 + (\\htmlClass{focusP}{p}\\htmlClass{focusC}{c})^2}`;

	$: equations = [equ, equE, equM, equC, equP];
	$: {
		$maxSteps = equations.length - 1;
	}
	$: currEquation = equations[$currStep];
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
	<h1 class="mx-auto mb-12 text-center font-sans text-5xl font-black tracking-tighter text-white">
		Math...
	</h1>
	<div class="flex flex-col items-center gap-8 text-2xl md:flex-row md:gap-20">
		<div class="text-white">
			<Katex math={currEquation} />
		</div>
		<div class="flex flex-col text-white">
			<div><span class="step-1-4:focusE font-bold" use:addSteps>E</span>: energy</div>
			<div><span class="step-2-4:focusM font-bold" use:addSteps>m</span>: mass</div>
			<div>
				<span class="step-3-4:focusC font-bold" use:addSteps>c</span>: speed of light
			</div>
			<div>
				<span class="step-4:focusP font-bold" use:addSteps>p</span>: momentum
			</div>
		</div>
	</div>
</div>
