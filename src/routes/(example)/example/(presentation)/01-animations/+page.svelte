<script lang="ts">
	import { addSteps } from '$lib/addsteps';
</script>

<div class="flex h-screen w-screen content-center items-center justify-center">
	<div class="animate__animated step-0:animate__fadeInLeft mx-auto w-2/4" use:addSteps>
		<!-- <img src="/14.svg" alt="figure-1" class="m-auto h-2/3" /> -->
		<!-- <div class="mx-auto w-2/3"> -->
		<lottie-player autoplay loop src="/lottieSteps.json" />
		<!-- </div> -->
	</div>
	<div class="animate__animated step-0:animate__fadeInUp" use:addSteps>
		<h1 class="mt-8 text-left font-sans text-5xl font-black tracking-tighter text-neutral-900">
			Create impactful presentations with animations
		</h1>
		<p class="mt-8 font-sans text-xl font-light leading-relaxed text-gray-500">
			Supports CSS animation with <a
				href="https://animate.style/"
				class="text-blue-600 hover:text-neutral-600">Animate.css</a
			>.
		</p>

		<p class="mt-8 font-sans text-xl font-light leading-relaxed text-gray-500">
			Add multiple steps per slide <br />
			Step by step add new classes / animations <br />
		</p>
	</div>
</div>
