<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const props = defineProps({
    code: {
        type: String,
        default: ''
    },
})


const { copy, copied } = useClipboard()
</script>

<template>
    <button @click="console.log('hi');copy($props.code ?? '')">
        <Icon :name="copied ? 'ph:check-bold' : 'ph:clipboard-bold'" />
    </button>
</template>