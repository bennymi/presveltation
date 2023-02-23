<script lang="ts">
	import { addSteps } from '$lib/addsteps';
	import { maxSteps, currStep } from '$lib/stores';

	import Katex from '$lib/math/Katex.svelte';

	let classE = 'text-teal-400';
	let classM = 'text-purple-400';
	let classC = 'text-orange-400';
	let classP = 'text-blue-400';

	let equ = `E = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equE = `\\htmlClass{${classE}}{E} = \\sqrt{(mc^2)^2 + (pc)^2}`;
	let equM = `\\htmlClass{${classE}}{E} = \\sqrt{(\\htmlClass{${classM}}{m}c^2)^2 + (pc)^2}`;
	let equC = `\\htmlClass{${classE}}{E} = \\sqrt{(\\htmlClass{${classM}}{m}\\htmlClass{${classC}}{c}^2)^2 + (p\\htmlClass{${classC}}{c})^2}`;
	let equP = `\\htmlClass{${classE}}{E} = \\sqrt{(\\htmlClass{${classM}}{m}\\htmlClass{${classC}}{c}^2)^2 + (\\htmlClass{${classP}}{p}\\htmlClass{${classC}}{c})^2}`;

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
			<div>
				<span class="font-bold" use:addSteps={[{ steps: '1-4', classes: classE }]}>E</span>: energy
			</div>
			<div>
				<span class="font-bold" use:addSteps={[{ steps: '2-4', classes: classM }]}>m</span>: mass
			</div>
			<div>
				<span class="font-bold" use:addSteps={[{ steps: '3-4', classes: classC }]}>c</span>: speed
				of light
			</div>
			<div>
				<span class="font-bold" use:addSteps={[{ steps: '4', classes: classP }]}>p</span>: momentum
			</div>
		</div>
	</div>
</div>
