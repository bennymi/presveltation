<script lang="ts">
	import { addSteps } from '$lib/addsteps';
</script>

<div class="flex h-screen w-screen content-center items-center justify-center">
	<div class="animate__animated step-0:animate__fadeInLeft" use:addSteps>
		<img src="/14.svg" alt="figure-1" class="m-auto h-2/3" />
	</div>
	<div class="animate__animated step-0:animate__fadeInUp" use:addSteps>
		<p class="font-sans text-sm font-bold uppercase tracking-widest text-blue-600">Feature</p>
		<h1 class="mt-8 text-left font-sans text-5xl font-black tracking-tighter text-neutral-900">
			Create impactful presentations with animations.
		</h1>
		<p class="mt-8 font-sans text-xl font-light leading-relaxed text-gray-500">
			Supports CSS animation out of the box with <a
				href="https://animate.style/"
				class="text-blue-600 hover:text-neutral-600">animate.css</a
			>.
		</p>

		<p class="mt-8 font-sans text-xl font-light leading-relaxed text-gray-500">
			Use animation freely <br />
			Just add one more class <br />
			Sounds super badass <br />
			But don't forget epilepsy <br />
		</p>
	</div>
</div>
