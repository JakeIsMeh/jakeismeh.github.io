<script setup lang="ts">
</script>


<template>
    <Navbar />
    <main class="main">
        <slot />
    </main>
    <Footer />
</template>

<style lang="scss" scoped>
main.main {
    flex: 1; // short for `1 1 0`
    display: block;
}
</style>