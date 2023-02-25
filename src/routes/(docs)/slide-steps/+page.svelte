<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import { addStepsEx, animateCssEx, tailwindEx } from './codebits';
</script>

<h1>Add Slide Step Classes</h1>

<h2 id="add-step-animation">Add Step Animations</h2>

<p>
	You can add classes to elements at specific steps in your presentation. To do this import the <code
		>addSteps</code
	>
	action. You can use this action to specify which classes you want to add and when. Step
	<code>0</code> always represents the inital slide when you enter it. You can add classes in 2 different
	ways:
</p>

<br />

<ol class="list-inside list-decimal space-y-4">
	<li>
		Add <code>step-A-B:</code> in front of the class. You can also just specify one step number (the
		range is optional). For example: <code>step-1:one-class</code> or
		<code>step-2-4:another-class</code>.
	</li>
	<li>
		You can pass the steps and the classes to the action as an argument. The argument should be a
		list of objects with a <code>step</code> and a <code>classes</code> property. Example:
		<code>{`use:addSteps={[ { steps: '0, 3-5', classes: 'scale-125 bg-gray-900' } ]}`}</code>.
	</li>
</ol>

<br />

<p>
	You should use the 2nd method for Tailwind classes to avoid them from being purged. The 2nd method
	also allows you to separate multiple steps with commas. For example: <code>'1, 3, 5-8'</code>.
</p>

<br />

<p>
	<code>addSteps</code> will automatically update the <code>maxSteps</code> store to the highest step
	value you specified.
</p>

<br />

<CodeBlock code={addStepsEx} language="svelte" />

<h2 id="animate-css">Animate.css</h2>

<CodeBlock code="pnpm add -D animate.css" language="shell" showLineNumbers={false} />

<br />

<p>
	You can use the <a
		class="underline"
		target="_blank"
		rel="noopener noreferrer"
		href="https://animate.style/"><code>animate.css</code></a
	>
	library to easily add transitions to your elements. Check out the documentation for a full list of
	available animations. You can use method 1 for these types of classes. In the example below the image
	will fade in from the left when entering the slide (at step
	<code>0</code>), using the <code>animate__fadeInLeft</code> Animate.css' class, and fade out to
	the right at step <code>1</code>.
</p>

<br />

<CodeBlock code={animateCssEx} language="svelte" highlightLines="1,5-6" focusType="highlight" />

<h2 id="tailwind-css">Tailwind CSS</h2>

<p>
	You can also add Tailwind classes stepwise. To do this you have to use method 2, otherwise
	Tailwind will purge the classes. Pass the steps and classes you want to add as an argument to the <code
		>addSteps</code
	> action.
</p>

<br />

<CodeBlock code={tailwindEx} language="svelte" highlightLines="1,6-10" focusType="highlight" />
