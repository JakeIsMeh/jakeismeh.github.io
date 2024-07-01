<template>
    <code class="inline"><slot /></code>
</template>

<style lang="scss">
code.inline {
    border: 0.0625rem solid var(--t-text);
    border-radius: $radius;
    padding: $eighth-spacing-unit;
    background-color: var(--t-bg-el1);
}
</style>