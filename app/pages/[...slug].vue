<script setup lang="ts">

const route = useRoute();
const { data: page } = await useAsyncData(
    route.path,
    () => queryCollection('content').path(route.path).first()
);

</script>

<template>
    <template v-if="page">
        <Title>{{ page.title }}</Title>
        <template v-if="!!page.body">
            <StaticMarkdownRenderer :path="page.path" />
        </template>
    </template>
    <template v-else>
        <NotFound />
    </template>
</template>
