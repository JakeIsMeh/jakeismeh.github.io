<script setup>
import { formatDate } from '@vueuse/core';

useHead({ title: "blog" });
const { data, pending, error, refresh } = await useAsyncData('musings', () => {
    return queryContent('musings')
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
    <h1>musings</h1>
    <br>
    <main id="posts" class="vstack">
        <p>come back soon :)</p>
        <!-- <div v-for="article in data" class="vstack gap-1">
            <h2>
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
            </h2>
            <span class="hstack gap-1">
                {{ formatDate(new Date(article.time), "DD MMM YYYY") }}
                <Tags :tags="article.tags" />
            </span>
            <p v-if="article.subtitle">{{ article.subtitle }}</p>
        </div> -->
    </main>
</template>


<style lang="scss">
#posts> :first-of-type {
    padding-top: 0;
}

#posts>* {
    padding: $half-spacing-unit 0;
    border-bottom: solid 1px var(--t-text);
}

#posts> :last-of-type {
    padding-bottom: 0;
    border-bottom: none;
}
</style>