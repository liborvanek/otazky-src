<script lang="ts" context="module">
	export const colorVariants = ['blue', 'grass', 'violet'] as const;
	export type ColorVariant = (typeof colorVariants)[number];
</script>

<script lang="ts">
	export let question: string;
	export let index: number;
	export let color: ColorVariant = 'blue';
	let isOpen = false;
</script>

<details
	open={isOpen}
	on:toggle={(event) => {
		isOpen = event.currentTarget.open ? true : false;
	}}
	class={color}
>
	<summary class="summary answer-grid">
		{#if index}
			<span class="index">{index}.</span>
		{/if}
		<p class="question">
			{question}
		</p>
		<span class="chevron"
			><img class="icon" class:!rotate-0={isOpen} src="/chevron.svg" alt="" /></span
		>
	</summary>
	<div class="answer-grid">
		<div class="answer">
			<slot />
		</div>
	</div>
</details>

<style lang="postcss">
	/* https://codepen.io/sosuke/pen/Pjoqqp */
	.blue .summary {
		@apply bg-blue-3 text-blue-dark-5 hover:bg-blue-4 focus-visible:ring-blue-7;
	}
	.blue .index {
		@apply text-blue-8;
	}
	.blue .icon {
		filter: invert(17%) sepia(97%) saturate(2930%) hue-rotate(201deg) brightness(87%) contrast(93%);
	}
	.blue .answer {
		@apply text-blue-dark-4;
	}

	.grass .summary {
		@apply bg-grass-3 text-grass-dark-5 hover:bg-grass-4 focus-visible:ring-grass-7;
	}
	.grass .index {
		@apply text-grass-8;
	}
	.grass .icon {
		filter: invert(34%) sepia(63%) saturate(420%) hue-rotate(80deg) brightness(90%) contrast(88%);
	}
	.grass .answer {
		@apply text-grass-dark-4;
	}

	.violet .summary {
		@apply bg-violet-3 text-violet-dark-5 hover:bg-violet-4 focus-visible:ring-violet-7;
	}
	.violet .index {
		@apply text-violet-8;
	}
	.violet .icon {
		filter: invert(23%) sepia(39%) saturate(5668%) hue-rotate(245deg) brightness(82%) contrast(83%);
	}
	.violet .answer {
		@apply text-violet-dark-4;
	}

	.icon {
		@apply h-5 w-5 rotate-180 transform transition-transform;
	}
	.summary {
		@apply rounded-lg shadow-sm shadow-surface-4 hover:cursor-pointer focus:outline-none focus-visible:ring-2;
	}

	.index {
		@apply text-right font-medium;
	}
	.question {
		@apply col-span-2 pr-4 md:col-auto;
	}

	.chevron {
		@apply mt-[3px] hidden justify-self-end md:flex;
	}

	.answer-grid {
		@apply grid gap-2 px-1 py-2 md:gap-4 md:pr-4;
		@apply grid-cols-[1.8rem_1fr_4rem] md:grid-cols-[2rem_1fr_4rem];
	}
	.answer {
		@apply col-start-2 col-end-4 mb-2 pt-3 pb-2 font-medium md:col-end-3 md:mb-2;
	}
</style>
