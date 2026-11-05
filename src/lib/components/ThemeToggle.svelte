<script lang="ts">
	import { theme } from '#lib/theme.svelte.ts';

	function syncTheme(node: HTMLButtonElement) {
		theme.syncFromDocument();
		node.setAttribute('aria-pressed', theme.current === 'dark' ? 'true' : 'false');
	}
</script>

<button
	type="button"
	class="theme-toggle"
	aria-pressed={theme.current === 'dark'}
	{@attach syncTheme}
	onclick={() => theme.toggle()}
>
	{theme.current === 'dark' ? 'Light mode' : 'Dark mode'}
</button>
