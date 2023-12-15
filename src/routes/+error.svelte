<!-- 
    bc of sveltekit's inability to use arbitrary named layouts we have to copy
    and paste the entirety of layout into our error page.
 -->

<script>
    import { page } from '$app/stores';
    import '~/app.scss';
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<Navbar />

<div class="main">
    <h1>{$page.status}</h1>
    <br />
    <p>{$page.error?.message}</p>
</div>

<Footer />

<style lang="scss">
    .main {
        flex: 1; // short for `1 1 0`
        display: block;
    }
</style>
