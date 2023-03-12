<script lang="ts">
	import QuestionAnswer, { type ColorVariant } from '$lib/QuestionAnswer.svelte';
	import Button from '$lib/Button.svelte';

	export let color: ColorVariant;
	export let name: string;
	export let sectionLetter: string;
	export let slug: string;
	export let questions: Array<{ question: string; answer: string }>;

	function shuffle() {
		questionsSorted = [...questionsWithIds.sort(() => (Math.random() > 0.5 ? -1 : 1))];
	}
	$: questionsWithIds = questions.map((question, index) => ({ id: index + 1, ...question }));
	$: questionsSorted = questionsWithIds;
</script>

<section class="mb-16">
	<div class="mb-6 flex items-center justify-between">
		<h2 id={slug} class="flex space-x-2 text-xl font-medium text-surface-dark-6 md:text-2xl">
			<span class="text-surface-11">{sectionLetter}.</span>
			<span>{name}</span>
		</h2>
		<Button size="sm" on:click={shuffle}>Přeházet</Button>
	</div>
	<div class="space-y-3 md:space-y-4">
		{#each questionsSorted as { id, question, answer } (id)}
			<QuestionAnswer {question} index={id} {color}>
				{answer}
			</QuestionAnswer>
		{/each}
	</div>
</section>
