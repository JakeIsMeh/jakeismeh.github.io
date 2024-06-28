<script setup>
import { onClickOutside } from "@vueuse/core"

const router = useRouter();
const checked = ref(false);
const target = ref(null);

onClickOutside(target, () => { checked.value = false; });
router.afterEach(() => { checked.value = false; });
</script>

<template>
    <div class="header hstack">
        <h1>
            <NuxtLink href="/">JakeIsMeh</NuxtLink>
        </h1>

        <nav class="site-nav" ref="target">
            <!-- TODO: redo responsive navbar with focus-within -->
            <input type="checkbox" id="nav-trigger" class="nav-trigger" v-model="checked" />
            <label for="nav-trigger">
                <Icon name="ph:list-bold" class="menu-icon"/>
            </label>
            <div class="trigger">
                <NuxtLink class="nav-link" href="/about">about</NuxtLink>
                <NuxtLink class="nav-link" href="/projects">projects
                </NuxtLink>
                <NuxtLink class="nav-link" :class="{ active: $route.fullPath.startsWith('/musings') }" href="/musings">musings
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.header {
    justify-content: space-between;
    align-items: center;
}

h1>a {
    text-decoration: none;

    &,
    &:visited {
        color: var(--t-text);
    }

    &:hover,
    &:focus {
        background-color: unset;
        color: var(--t-text);
    }
}

.header {
    margin-bottom: $half-spacing-unit;
    border-bottom: 1px solid var(--t-text);
    padding: $half-spacing-unit 0;
}

h1 {
    display: inline;
}

.site-nav {
    font-family: $header-font-family;
    float: right;

    .nav-trigger {
        display: none;
    }

    .menu-icon {
        display: none;
    }

    .nav-link {
        // text-decoration: none;
        font-size: 1.25em;
        color: var(--t-text);
        font-weight: bold;
        transition: color 0.16s, background-color 0.16s;
        padding: 0 0.25em;
        margin: 0; // reset app.scss margin

        &:hover,
        &:focus,
        &.active,
        &[aria-current]:not([aria-current="false"]) {
            color: var(--t-bg);
            background-color: var(--t-text);
        }
    }

    .trigger {
        display: flex;
        gap: $half-spacing-unit;
    }

    @include media-query($on-palm) {
        position: absolute;
        top: $half-spacing-unit + $quarter-spacing-unit;
        right: $half-spacing-unit;
        background-color: var(--t-bg);
        border: 2px solid var(--t-text);
        border-radius: $radius;
        text-align: right;

        label[for='nav-trigger'] {
            display: block;
            float: right;
            width: 2.25rem;
            height: 2.25rem;
            z-index: 2;
            cursor: pointer;
        }

        .menu-icon {
            display: block;
            padding: 5px;
            margin: 3px;
            fill: currentColor;
        }

        input~.trigger {
            min-width: unset;
            min-height: unset;
            clear: both;
            display: none;
            transition: display 200ms;
        }

        input:checked~.trigger {
            display: block;
        }

        .nav-link {
            display: block;
            padding: 5px 10px;
            border-radius: 0;
        }

        a:last-of-type {
            border-radius: 0 0 ($radius - 3px) ($radius - 3px);
        }

    }
}
</style>
