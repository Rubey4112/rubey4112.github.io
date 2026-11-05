<script lang="ts">
	import { resolve } from '$app/paths';

	let { current = '' }: { current?: string } = $props();

	function mark(id: string) {
		return current === id ? 'true' : undefined;
	}
</script>

<nav class="primary-nav" aria-label="Primary">
	<ul class="nav-links">
		<li><a href={resolve('/#about')} aria-current={mark('about')}>About</a></li>
		<li><a href={resolve('/#experience')} aria-current={mark('experience')}>Experience</a></li>
		<li><a href={resolve('/#projects')} aria-current={mark('projects')}>Projects</a></li>
		<li><a href={resolve('/#contact')} aria-current={mark('contact')}>Contact</a></li>
	</ul>
</nav>
