<!-- inspired by https://roe.dev/blog/nuxt-server-components -->
<!-- stolen from https://github.com/nuxt/content/blob/748d1cde42c63367a9131d992c02be2c8994d927/src/runtime/components/ContentRendererMarkdown.vue -->

<template>
    <Suspense>
        <MDCRenderer :body="body" :data="data" :tag="tag" :components="mdcComponents" v-bind="$attrs" />
    </Suspense>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
    /**
     * Content to render
     */
    value: {
        type: Object,
        required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
        type: Boolean,
        default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
        type: String,
        default: 'div'
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
        type: Object,
        default: () => ({})
    },

    data: {
        type: Object,
        default: () => ({})
    }
})

const body = computed(() => {
    let body = props.value.body || props.value
    if (props.excerpt && props.value.excerpt) {
        body = props.value.excerpt
    }

    return body
})

const data = computed(() => {

    const { body, excerpt, ...data } = props.value
    return {
        ...data,
        ...props.data
    }
})

const mdcComponents = computed(() => {
    return {
        ...props.components,
        ...(data.value._components || {})
    }
})
</script>
