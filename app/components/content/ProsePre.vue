<template>
    <DevOnly v-if="!$props.code || $props.code.trim().length < 1">
        <div class="devwarn">
            <p>Empty code block</p>
        </div>
    </DevOnly>
    <div class="codeblock" v-else>
        <div class="codemeta" v-if="filename">
            <span><small>{{ $props.filename }}</small></span>
        </div>
        <pre :class="$props.class"><slot /></pre>
        <div class="codecorner hstack gap-1">
            <span>{{ $props.language }}</span>
            <button @click="copy($props.code ?? '')" class="copysnippet">
                <Icon :name="copied ? 'ph:check-bold' : 'ph:clipboard-bold'" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})

const { copy, copied } = useClipboard()
</script>

<style lang="scss">
@use '@/assets/shiki.scss' as *;

.codeblock {
    @extend %shiki;

    @include transition(color .16s, background-color .16s);
    color: var(--t-text);
    position: relative;
    border: .0625rem solid;
    border-radius: $radius;
    background-color: var(--t-bg-el1);

    .codemeta {
        padding: $quarter-spacing-unit;
        border-bottom: .0625rem solid;
    }

    pre {
        background: transparent;
        padding: $quarter-spacing-unit 0;
        margin: 0;
        border: none; // override global `pre` style

        span.line {
            padding: $sixteenth-spacing-unit $quarter-spacing-unit;
        }
    }

    .copysnippet {
        .iconify {
            width: 1.333em;
        }

        aspect-ratio: 1;
        width: fit-content;
    }

    .codecorner {
        user-select: none;
        position: absolute;
        top: $quarter-spacing-unit - 2px;
        right: $quarter-spacing-unit - 2px;
    }
}
</style>
