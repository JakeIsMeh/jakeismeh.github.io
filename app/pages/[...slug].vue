<script setup lang="ts">

const router = useRouter();

const key_slug = computed(() => {
    let tmp = router.currentRoute.value.path.split('/');

    tmp.shift();

    // just in case there is a traling slash linked somewhere
    if (!tmp.at(-1)) {tmp.pop()}

    return tmp.join('-')
})

const { data: page } = await useAsyncData(
    key_slug,
    () => queryCollection('content').path(router.currentRoute.value.path).first()
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
