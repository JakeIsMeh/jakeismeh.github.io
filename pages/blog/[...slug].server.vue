<script setup>
import { formatDate } from '@vueuse/core';
</script>

<template>
    <ContentDoc>
        <template v-slot="{ doc }">
            <p>blog</p>
            <h1>{{ doc.title }}</h1>
            <p>{{ formatDate(new Date(doc.time), "DD MMM YYYY") }}</p>
            <p v-if="doc.subtitle">{{ doc.subtitle }}</p>
        </template>
        <template #empty>
            <h1>Document is empty</h1>
        </template>
        <template #not-found>
            <h1>404</h1>
            <p>How'd you get here?</p>
            <br>
            <p><i>If there's supposed to be something here, let me know.</i></p>
        </template>
    </ContentDoc>
</template>

<style lang="scss" scoped>
div#ContentDoc {
    flex: 1;
    display: block;
}
</style>
