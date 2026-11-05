export type ThemeName = 'light' | 'dark';

const storageKey = 'theme';

class ThemeController {
	current = $state<ThemeName>('light');

	syncFromDocument() {
		this.current =
			document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
		this.apply();
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		try {
			localStorage.setItem(storageKey, this.current);
		} catch {
			/* Ignore storage failures and still switch for this view. */
		}
		this.apply();
	}

	apply() {
		const dark = this.current === 'dark';
		document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', dark ? '#141413' : '#ECECE8');
	}
}

export const theme = new ThemeController();
