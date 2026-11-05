<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/data/site.ts';
</script>

<footer class="site-footer">
	<div class="wrap footer-inner">
		<p>{site.name} · {site.school}</p>
		<p><a href={resolve('/links')}>Links</a></p>
		<p>{site.degree} · Expected {site.expected}</p>
	</div>
</footer>
