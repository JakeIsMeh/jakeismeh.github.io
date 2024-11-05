<!-- Stolen from github.com/danielroe/roe.dev/blob/main/app/pages/blog/[article].vue -->

<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})

const { path } = defineProps<{
    path: String
}>()

// const { path, tag = 'article' } = defineProps<{
//     path: String
//     tag?: String
// }>()

async function retrieve() {
    if (import.meta.dev) {
        const { data } = await useAsyncData(() => queryContent(path).only('body').findOne());
        return data;
    }
    return await queryContent(path).only('body').findOne();
}

const article = await retrieve();

</script>

<template>
    <div>
        <ContentRendererMarkdown :value="article!" tag="article" v-bind="$attrs" />
    </div>
</template>


<style lang="scss" scoped>
article:deep() {
    :not(div:first-child) {

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            padding-top: $half-spacing-unit;
        }
    }

    a[aria-describedby="footnote-label"] {
        margin-left: 0; // reset link margin
    }

    .footnotes {
        // font-size: 0.85em;
        border: .125rem solid;
        // border-radius: $radius;
        background-color: var(--t-bg-el1);
        padding: $half-spacing-unit;

        a[data-footnote-backref] {
            margin-left: 0; // reset link margin
            font-family: initial;
        }

        h2:first-child {
            padding-top: 0;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding-bottom: $eighth-spacing-unit;
    }

    // paragraphs with only math
    p>span.katex:only-child {
        display: block;
        text-align: center;
        width: 100%
    }

    // .katex-display>.katex {
    //     white-space: normal
    // }

    // /* Add space between broken lines: */
    // .katex-display>.base {
    //     margin: 0.25em 0
    // }

    // /* Compensate by reducing space around display math */
    // .katex-display {
    //     margin: 0.5em 0;
    //     overflow: auto hidden;
    // }

    .katex {
        text-align: center;
    }

    // math blocks (```math)
    // article>span.katex {
    //     display: block;
    //     width: 100%;
    //     text-align: center;

    //     &>span.katex-html {
    //         display: block;
    //         width: 100%;
    //         text-align: center;


    //         &>span.base {
    //             margin: 0 auto;
    //             display: flex;
    //             flex-direction: column;
    //             gap: $quarter-spacing-unit;
    //             text-align: center;

    //             &>span.strut {
    //                 display: none;
    //             }

    //             &>span.mord {
    //                 display: block;
    //                 text-align: center;
    //                 width: 100%
    //             }
    //         }
    //     }
    // }
}
</style>

<style lang="scss">
@import 'katex/dist/katex.css';
</style>
