<script setup>
import { formatDate } from '@vueuse/core';
</script>

<template>
    <ContentDoc :head="false">
        <template v-slot="{ doc }">
            <Title>{{ doc.title }}</Title>
            <div class="vstack gap-1"> 
                <h1>{{ doc.title }}</h1>
                <p v-if="doc.time || doc.date">{{ formatDate(new Date(doc.time ?? doc.date), "DD MMM YYYY") }}</p>
                <DevOnly v-else>
                    <p class="devwarn">Missing date</p>
                </DevOnly>
                <Tags :tags="doc.tags" />
                <p v-if="doc.subtitle"><small><i>{{ doc.subtitle }}</i></small></p>
                <DevOnly v-else>
                    <p class="devinfo">No subtitle</p>
                </DevOnly>
            </div>
            <br>
            <article>
                <StaticMarkdownRenderer :value="doc" class="vstack gap-2" />
            </article>
            <br>
            <p><NuxtLink to="/musings"><Icon name="ph:arrow-left-bold"/>More musings</NuxtLink></p>
        </template>
        <template #empty>
            <h1>Document is empty</h1>
        </template>
        <template #not-found>
            <NotFound />
        </template>
    </ContentDoc>
</template>

<style lang="scss">
@import 'katex/dist/katex.css';
</style>
