<script setup lang="ts">
import { StaticMarkdownRenderer } from '#components';
import { formatDate } from '@vueuse/core';

const mdr = useTemplateRef('mdr');
const dev = import.meta.dev;

const router = useRouter();

const key_slug = computed(() => {
    let tmp = router.currentRoute.value.path.split('/');

    tmp.shift();

    // just in case there is a traling slash linked somewhere
    if (!tmp.at(-1)) {tmp.pop()}

    return tmp.join('-')
})

let pickArray = ['path', 'title', 'time', 'date', 'tags', 'subtitle']
if (dev) { pickArray.push('body') }


const { data } = await useAsyncData(key_slug, () =>  ((import.meta.server || import.meta.dev) as true) && queryCollection('content').path(router.currentRoute.value.path).select(...pickArray).first())

if (!data.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
        fatal: true,
    });
}

if (dev) {
    onMounted(async () => {
        await nextTick();
        watch(data, async () => {
            await mdr.value?.refresh()
        }, {deep:true})
    })
}
</script>

<template>
    <template v-if="data">
        <Title>{{ (data.title && data.title.trim()) || "Untitled Post" }}</Title>
        <div class="vstack gap-1">
            <h1 :class="{ 'devwarn': !(data.title && data.title.trim()) }">{{ (data.title && data.title.trim()) ||
                "Untitled Post" }}</h1>
            <p v-if="data.time || data.date">{{ formatDate(new Date(data.time ?? data.date), "DD MMM YYYY") }}</p>
            <DevOnly v-else>
                <p class="devwarn">Missing date</p>
            </DevOnly>
            <Tags :tags="data.tags" />
            <p v-if="data.subtitle"><small><i>{{ data.subtitle }}</i></small></p>
            <DevOnly v-else>
                <p class="devinfo">No subtitle</p>
            </DevOnly>
        </div>
        <br>
        <template v-if="dev ? data.body.value.length > 0 : true" >
            <StaticMarkdownRenderer :path="data.path!" class="vstack gap-2" ref="mdr"/>
        </template>
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
