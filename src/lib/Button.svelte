<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let classes = '';
	export { classes as class };
	export let disabled = false;
	export let size: 'sm' | 'md' = 'md';
	export let color = 'surface' as const;
	export let type: 'submit' | 'button' = 'submit';

	const colors: Record<typeof color, string> = {
		surface:
			'border-surface-8 bg-surface-2 text-surface-11 hover:bg-surface-3 focus-visible:ring-violet-8 active:bg-surface-4',
	};
	const sizes = {
		sm: 'py-2 px-2 text-sm',
		md: 'py-3 px-8 text-base',
	};

	const dispatch = createEventDispatcher();
</script>

<button
	class="flex items-center justify-center rounded-md border font-medium uppercase shadow-sm outline-none transition-all focus:ring-offset-1 focus-visible:outline-none focus-visible:ring-2 active:translate-y-[2px] active:scale-[0.99] {colors[
		color
	]} {sizes[size]} {classes}"
	{disabled}
	{type}
	on:click={(e) => dispatch('click', { event: e })}
>
	<slot />
</button>
