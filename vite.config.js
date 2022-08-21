import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        sveltekit(),
        Icons({
            compiler: 'svelte',
            scale: 0.75,
            iconCustomizer(collection, icon, props) {
                props.style = 'vertical-align: middle;';
                if (collection === 'feather' && icon === 'external-link') {
                    props.width = '0.60em';
                    props.height = '0.8em';
                    props.style += 'margin-left: 0.1em;';
                } else {
                    props.style += 'margin-right: 0.25em;';
                }
            }
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/variables.scss" as *;'
            }
        }
    },
}