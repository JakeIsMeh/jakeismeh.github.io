<template>
    <NuxtLink :href="href" :target="target">
        <slot />
        <Icon v-if="isExternal()" name="ph:arrow-up-right-bold" class="link-icon" />
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { hasProtocol } from 'ufo';

const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
        default: undefined,
        required: false
    }
})

function isExternal() {
    const path = props.href || ''

    // When `to` is a route object then it's an internal link
    if (typeof path === 'object') {
        return false
    }

    return path === '' || (typeof path === 'string' && hasProtocol(path, { acceptRelative: true }))
}
</script>
