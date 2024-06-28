<script setup lang="ts">
defineProps<{tags?: Array<string>}>()
</script>

<template>
    <div class="hstack gap-1" id="tags"  v-if="tags.length > 0"><span v-for="tag in tags">{{ tag }}</span></div>
</template>

<style lang="scss">
#tags > span{
    font-size: 1rem;
    border-radius: $half-radius;
    padding: calc($quarter-spacing-unit/2) $quarter-spacing-unit;
    color: var(--t-bg);
    background-color: var(--t-text);
}
</style>