<script setup>
import { formatDate } from '@vueuse/core';

useHead({ title: "blog" });
const { data, pending, error, refresh } = await useAsyncData('blog', () => {
    return queryContent('blog')
        .only(['_path', 'title', 'subtitle', 'time', 'tags'])
        .sort({
            tags: 1,
            subtitle: 1,
            title: 1,
            time: -1,
        })
        .find()
})

</script>

<template>
    <h1>blog</h1>
    <br>
    <main id="posts" class="vstack">
        <p>come back soon :)</p>
        <!-- <div v-for="article in data">
            <h2><NuxtLink :to="article._path">{{ article.title }}</NuxtLink></h2>
            <p>{{ formatDate(new Date(article.time), "DD MMM YYYY") }}</p>
            <p v-if="article.subtitle">{{ article.subtitle }}</p>
            <div class="hstack" id="tags"><span v-for="tag in article.tags">{{ tag }}</span></div>
        </div> -->
    </main>
</template>


<style lang="scss">
#posts > :first-of-type {
    padding-top: 0;
}

#posts > *{
    padding: $half-spacing-unit 0;
    border-bottom: solid 1px var(--t-text);
}
#posts > :last-of-type {
    padding-bottom: 0;
    border-bottom: none;
}
#tags {
    gap: $quarter-spacing-unit;
}
#tags > span{
    font-size: 1rem;
    border-radius: $half-radius;
    padding: calc($quarter-spacing-unit/2) $quarter-spacing-unit;
    color: black;
    background-color: white;
}
</style>