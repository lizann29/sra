import adapter from '@sveltejs/adapter-static'; // შეცვალეთ adapter-auto -> adapter-static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// სტატიკური ადაპტერის ოპციები
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false
		}),
		paths: {
			base: '/sra' // შეცვალეთ 'sra' თქვენი GitHub რეპოზიტორიის სახელით
		}
	}
};

export default config;