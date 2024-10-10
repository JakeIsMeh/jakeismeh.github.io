<script setup>
import { formatDate } from '@vueuse/core';

const { data } = await useAsyncData('musings', () => {
    let q = queryContent('musings')
        .only(['_path', 'title', 'subtitle', 'date', 'time', 'tags'])

        if (!import.meta.dev) {
            q = q.where({"title": { $ne: "test"}})
        }
        
        q = q.sort({
            tags: 1,
            subtitle: 1,
            title: 1,
            date: -1,
            time: -1,
        })
        .find()

    return q;
})

</script>

<template>
    <Title>musings</Title>
    <h1>musings</h1>
    <br>
    <main id="posts" class="vstack">
        <template v-if="data.length > 0">
            <div v-for="article in data" class="vstack gap-1">
                <h2>
                    <NuxtLink :to="article._path" :class="{ 'devwarn': !(article.title && article.title.trim()) }">{{ (article.title && article.title.trim()) || "Untitled Post"  }}</NuxtLink>
                </h2>
                <span class="hstack gap-1 f-ai-bl">
                    <span v-if="article.time || article.date">
                        {{ formatDate(new Date(article.time ?? article.date), "DD MMM YYYY") }}
                    </span>
                    <DevOnly v-else>
                        <p class="devwarn">Missing date</p>
                    </DevOnly>
                    <Tags :tags="article.tags" />
                </span>
                <p v-if="article.subtitle"><small><i>{{ article.subtitle }}</i></small></p>
                <DevOnly v-else>
                    <p class="devinfo">No subtitle</p>
                </DevOnly>
            </div>
        </template>
        <p v-else>come back soon :)</p>
    </main>
</template>


<style lang="scss">
#posts> :first-of-type {
    padding-top: 0;
}

#posts>* {
    padding: $half-spacing-unit 0;
    border-bottom: .125rem solid;
}

#posts> :last-of-type {
    padding-bottom: 0;
    border-bottom: none;
}
</style>