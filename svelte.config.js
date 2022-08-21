import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		prerender : { default: true },
		adapter: adapter(),
	},

	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	]
};

export default config;
