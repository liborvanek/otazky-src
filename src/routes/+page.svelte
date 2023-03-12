<script lang="ts">
	import srcQuestions from '$lib/data/src-questions.json';
	import QuestionSection from '$lib/QuestionSection.svelte';
	import { colorVariants } from '$lib/QuestionAnswer.svelte';

	const getAbcLetter = (index: number) => String.fromCharCode(97 + index);
</script>

<svelte:head>
	<title>Otázky – Omezený průkaz operátora námořní pohyblivé služby (SRC)</title>
	<meta name="description" content="Zkušební otázky k písemnému testu ČTÚ." />
</svelte:head>

<main class="mb-12 md:mb-16">
	<h1 class="text-2xl font-bold sm:text-3xl md:mb-6">
		Omezený průkaz operátora<br />námořní pohyblivé služby (SRC)
	</h1>

	<ul class="mb-8 list-disc pl-8 md:mb-12">
		<li class="mt-4 text-surface-11">otázky k písemnému testu ČTÚ (dle § 2 písm. k vyhlášky)</li>
		<li class="text-surface-11">
			verze <a class="font-bold" href="https://www.ctu.cz/druhy-prukazu">2/2023</a><strong />
			(neaktualizuje se automaticky, změny
			<a href="https://github.com/liborvanek/otazky-src/issues">hlaste sem</a>)
		</li>
	</ul>
	<nav class="mb-12 bg-mauve-2 px-4 py-6 shadow-inner md:mb-16 md:px-8">
		<ol class="space-y-1">
			{#each srcQuestions as { name, slug, questions }, index}
				<li class="list-inside list-[lower-alpha] text-indigo-8">
					<a class="ml-2" href="#{slug}"
						>{name} <span class="text-indigo-8">({questions.length})</span></a
					>
				</li>
			{/each}
		</ol>
	</nav>

	{#each srcQuestions as section, index}
		<QuestionSection
			sectionLetter={getAbcLetter(index)}
			color={colorVariants[index]}
			{...section}
		/>
	{/each}
</main>
