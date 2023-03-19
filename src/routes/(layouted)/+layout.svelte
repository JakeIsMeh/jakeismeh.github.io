<script>
    import '~/app.scss';
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<Navbar />

<div class="main">
    <slot />
</div>

<Footer />

<style lang="scss">
    .main {
        flex: 1; // short for `1 1 0`
        display: block;
    }
</style>
