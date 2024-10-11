<script setup lang="ts">
import { StaticMarkdownRenderer } from '#components';
import { formatDate } from '@vueuse/core';
const route = useRoute();
const mdr = useTemplateRef('mdr');
const dev = import.meta.dev;

let pickArray = ['_path', 'title', 'time', 'date', 'tags', 'subtitle']
if (dev) { pickArray.push('body') }
const { data: doc } = await useAsyncData('article', () => queryContent(route.path).only(pickArray).findOne())

if (dev) {
    onMounted(async () => {
        await nextTick();
        watch(doc, async () => { 
            if (doc.value!.body!.children.length > 0) {
                await mdr.value?.refresh()
            }
        })
    })
}
</script>

<template>
    <template v-if="doc">
        <Title>{{ (doc!.title && doc!.title.trim()) || "Untitled Post" }}</Title>
        <div class="vstack gap-1">
            <h1 :class="{ 'devwarn': !(doc!.title && doc!.title.trim()) }">{{ (doc!.title && doc!.title.trim()) ||
                "Untitled Post" }}</h1>
            <p v-if="doc!.time || doc!.date">{{ formatDate(new Date(doc!.time ?? doc!.date), "DD MMM YYYY") }}</p>
            <DevOnly v-else>
                <p class="devwarn">Missing date</p>
            </DevOnly>
            <Tags :tags="doc!.tags" />
            <p v-if="doc!.subtitle"><small><i>{{ doc!.subtitle }}</i></small></p>
            <DevOnly v-else>
                <p class="devinfo">No subtitle</p>
            </DevOnly>
        </div>
        <br>
        <StaticMarkdownRenderer :path="doc._path!" class="vstack gap-2" ref="mdr" v-if="dev ? doc.body!.children.length > 0 : true" />
        <template v-else>
            <h1 class="devwarn">document is empty</h1>
        </template>
    </template>
    <template v-else>
        <NotFound />
        <br>
    </template>
    <br>
    <p>
        <NuxtLink to="/musings">
            <Icon name="ph:arrow-left-bold" />More musings
        </NuxtLink>
    </p>
</template>

<style lang="scss"></style>
