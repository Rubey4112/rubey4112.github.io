<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, socials } from '#lib/data/site.ts';

	let { email = false, portfolio = false }: { email?: boolean; portfolio?: boolean } = $props();
</script>

<ul class="link-row">
	{#if portfolio}
		<li><a href={resolve('/')}>Portfolio</a></li>
	{/if}
	{#each socials as link (link.href)}
		<li><a href={link.href} rel="me noopener noreferrer">{link.label}</a></li>
	{/each}
	{#if email}
		<li><a href="mailto:{site.email}">{site.email}</a></li>
	{/if}
</ul>
