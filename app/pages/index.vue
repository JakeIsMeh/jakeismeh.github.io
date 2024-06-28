<script setup>
definePageMeta({ layout: "blank" });
useHead({ title: "" }); 
</script>

<template>
    <div class="main vstack">
        <img src="https://avatars.githubusercontent.com/JakeIsMeh" alt="profile pic" class="pfp" />
        <div class="spacer"></div>
        <h1>
            <NuxtLink href="/">JakeIsMeh</NuxtLink>
        </h1>
        <div class="spacer"></div>
        <p>
            <NuxtLink href="/about" class="nav-link">about</NuxtLink>
        </p>
        <p>
            <NuxtLink href="/projects" class="nav-link">projects</NuxtLink>
        </p>
        <p>
            <NuxtLink href="/musings" class="nav-link">musings</NuxtLink>
        </p>
        <div class="spacer"></div>
        <p><a href="https://gitlab.com/JakeIsMeh" class="nav-link" target="_blank" rel="nofollow">
                <Icon name="ph:gitlab-logo-simple-bold" />gitlab<IconExtLink />
            </a></p>
        <p><a href="https://github.com/JakeIsMeh" class="nav-link" target="_blank" rel="nofollow">
                <Icon name="ph:github-logo-bold" />github<IconExtLink />
            </a></p>
    </div>
</template>

<style lang="scss" scoped>
.main {
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    padding: $half-spacing-unit 0;
}

h1>a {
    text-decoration: none;

    &,
    &:visited {
        transition: color .16s;
        color: var(--t-text);
    }

    &:hover,
    &:focus {
        background-color: unset;
        color: var(--t-text);
    }
}

.spacer {
    height: 1em;
}

a.nav-link {
    font-size: 1.5em;
    color: var(--t-text);
    line-height: $base-line-height;
    transition: color .16s, background-color .16s;
    padding: 0 .25em;
    margin: 0; // reset margin.scss

    .icon:first-child {
        margin-right:.2em;
    }
}

a.nav-link:hover,
a.nav-link:focus {
    color: var(--t-bg);
    background-color: var(--t-text);
}

img.pfp {
    width: auto;
    max-height: 16rem;
    border: calc($radius / 4) solid var(--t-text);
    border-radius: $radius;
    background-color: var(--t-pink);
}
</style>
