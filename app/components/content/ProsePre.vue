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
        <pre :class="[$props.class, { 'codepad': !$props.language }]" :start="meta?.start"><slot /></pre>
        <div class="codecorner hstack gap-0">
            <span v-if="$props.language && $props.language !== 'txt'">{{ $props.language }}</span>
            <!-- <CopyCodeSnippetButton nuxt-client :code="$props.code" class="copysnippet"/> -->
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

const meta = computed(() => {
    return props.meta ? JSON.parse(props.meta) : undefined;
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
    border: .125rem solid;
    // border-radius: $radius;
    background-color: var(--t-bg-el1);

    .codemeta {
        padding: $quarter-spacing-unit;
        border-bottom: .125rem solid;
    }

    .codepad {
        padding: $quarter-spacing-unit;
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
            line-height: 1.6;

            span.line {
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

    span+.copysnippet {
        // border-radius: 0 $half-radius $half-radius 0;
    }

    .codecorner {
        user-select: none;
        position: absolute;
        top: $quarter-spacing-unit - 2px;
        right: $quarter-spacing-unit - 2px;
        background-color: var(--t-pink-bg);
        color: var(--t-bg);
        // border-radius: $half-radius;
        > span {
            padding: 0 $eighth-spacing-unit;
            align-content: center;
        }
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
