<!-- Stolen from github.com/danielroe/roe.dev/blob/main/app/pages/blog/[article].vue -->

<script setup lang="ts">
const { path, tag = 'article' } = defineProps<{
    path: String
    tag?: String
}>()

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
    <ContentRendererMarkdown :value="article" :tag="tag"/>
</template>


<style lang="scss" scoped>
:deep() {

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

    .footnotes {
        font-size: 0.85em;
        border: .125rem solid;
        // border-radius: $radius;
        background-color: var(--t-bg-el1);
        padding: $half-spacing-unit;

        a[data-footnote-backref] {
            margin-left: $sixteenth-spacing-unit;
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
}
</style>

<style lang="scss">
@import 'katex/dist/katex.css';
</style>
