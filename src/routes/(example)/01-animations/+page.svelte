<script lang="ts">
	import { addStepAnimation } from '$lib/addstepanimation';
</script>

<div class="flex items-center justify-center content-center w-screen h-screen">
	<div class="animate__animated step-0:animate__fadeInLeft" use:addStepAnimation>
		<img src="14.svg" alt="figure-1" class="h-2/3 m-auto" />
	</div>
	<div class="animate__animated step-0:animate__fadeInUp" use:addStepAnimation>
		<p class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase">Feature</p>
		<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
			Create impactful presentations with animations.
		</h1>
		<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
			Supports CSS animation out of the box with <a
				href="https://animate.style/"
				class="text-blue-600 hover:text-neutral-600">animate.css</a
			>.
		</p>

		<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
			Use animation freely <br />
			Just add one more class <br />
			Sounds super badass <br />
			But don't forget epilepsy <br />
		</p>
	</div>
</div>
