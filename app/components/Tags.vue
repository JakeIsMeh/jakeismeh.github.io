<script setup lang="ts">
import { castArray } from '~~/utils/castArray';

const props = defineProps<{tags?: Array<string> | string | undefined}>()
const tags_arr = castArray(props.tags);
</script>

<template>
    <div class="hstack gap-1" id="tags"  v-if="tags_arr.length > 0"><span v-for="tag in tags_arr">{{ tag }}</span></div>
</template>

<style lang="scss">
#tags > span{
    @include transition(color .16s, background-color .16s);
    font-size: 1rem;
    border-radius: $half-radius;
    padding: $eighth-spacing-unit $quarter-spacing-unit;
    color: var(--t-bg);
    background-color: var(--t-text);
}
</style>