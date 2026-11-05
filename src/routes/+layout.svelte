<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Footer from '#lib/components/Footer.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';
	import { site, socials } from '#lib/data/site.ts';
	import type { LayoutProps } from './$types';
	import '../app.css';

	let { children }: LayoutProps = $props();
	let current = $state('');

	const sectionIds = ['about', 'experience', 'projects', 'contact'];

	function watchSections(node: HTMLElement) {
		current = '';
		if (!('IntersectionObserver' in window)) return;

		const sections = sectionIds
			.map((id) => node.querySelector<HTMLElement>(`#${id}`))
			.filter((section): section is HTMLElement => section !== null);
		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) current = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);
		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	}

	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		url: `${site.url}/`,
		email: `mailto:${site.email}`,
		image: site.image,
		description:
			'Junior electrical engineering student at George Mason University focused on robotics, embedded systems, PCB design, and FPGA/VHDL.',
		affiliation: {
			'@type': 'CollegeOrUniversity',
			name: site.school
		},
		sameAs: socials.map((link) => link.href)
	};

	const jsonLd = JSON.stringify(person).replaceAll('<', '\\u003c');
</script>

<svelte:head>
	<svelte:element this={"script"} type="application/ld+json">{jsonLd}</svelte:element>
</svelte:head>

<div class="sheet">
	<a class="skip-link" href="#main">Skip to content</a>

	<header class="site-header">
		<div class="accent-rule" aria-hidden="true"></div>
		<div class="wrap masthead">
			<a class="wordmark" href={resolve('/#top')}>{site.name}</a>
			<Nav {current} />
			<ThemeToggle />
		</div>
	</header>

	<main id="main">
		{#key page.url.pathname}
			<div style="display: contents" {@attach watchSections}>
				{@render children()}
			</div>
		{/key}
	</main>

	<Footer />
</div>
