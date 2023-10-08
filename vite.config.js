import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
export default {
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        sveltekit(),
        Icons({
            compiler: 'svelte',
            scale: 0.75,
            iconCustomizer(collection, icon, props) {
                props.style = 'vertical-align: middle;';
                if (collection === 'lucide' && icon === 'external-link') {
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
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/variables.scss" as *;'
            }
        }
    },
}