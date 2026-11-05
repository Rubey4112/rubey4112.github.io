<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import SocialLinks from '#lib/components/SocialLinks.svelte';
	import { site } from '#lib/data/site.ts';
</script>

<Seo
	title="{site.name} | Links"
	description="Links for Toan Do, a junior electrical engineering student at George Mason University."
/>

<div class="wrap links-page">
	<p class="kicker">Links</p>
	<h1>{site.name}</h1>
	<p class="deck">Junior electrical engineering student at George Mason University.</p>
	<SocialLinks portfolio email />
</div>
