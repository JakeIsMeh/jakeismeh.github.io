<template>
    <div>
        <h2 :id="id">
            <slot />
            <a :href="`#${id}`" class="h-anc" v-if="generate">
                <Icon name="ph:hash-bold" />
            </a>
        </h2>
    </div>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>
