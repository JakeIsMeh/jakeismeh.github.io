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
            <CopyCodeSnippetButton nuxt-client :code="$props.code" class="copysnippet"/>
        </div>
    </div>
</template>

<script setup lang="ts">
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

const lang_str = JSON.stringify(`     ${props.language}`);
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
        overflow-x: auto; // scroll if code block is too wide

        code {
            display: block;
            width: fit-content;
            min-width: 100%;

            span.line {
                padding: $sixteenth-spacing-unit $quarter-spacing-unit;
                display: flex;
                flex-direction: row;
            }
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
        background-color: var(--t-pink-bg);
        color: var(--t-bg);
        border-radius: $half-radius;
        padding-left: $eighth-spacing-unit;
    }
}
</style>

<style lang="scss" scoped>
.codeblock>:deep(pre code span.line::after) {
    content: v-bind(lang_str);
    display: inline-block;
    visibility: hidden;
}
</style>
