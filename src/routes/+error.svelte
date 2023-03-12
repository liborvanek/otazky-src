<script>
	import { page } from '$app/stores';
</script>

<main class="grid min-h-full bg-white py-24 px-6 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-xl font-bold text-blue-10">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold text-blue-dark-6 sm:text-6xl">
			{$page.error?.message}
		</h1>
		<p class="mt-6 text-lg leading-7 text-mauve-12">
			{#if $page.status === 404}
				Sorry, we couldn’t find the page<br />you’re looking for.
			{:else}
				We've encountered an unexpected error.<br />Our engineers have been notified.
			{/if}
		</p>
	</div>
</main>
