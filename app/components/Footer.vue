<template>
    <footer class="hstack">
        <div id="text" class="vstack">
            <p>made with 💖</p>
            <p>&copy; JakeIsMeh</p>
            <p>text content CC-BY-4.0</p>
        </div>
        <div id="gifs">
            <a href="https://en.wikipedia.org/wiki/Cohost">
                <NuxtImg src="/cohost.png" alt="" />
            </a>
            <a href="https://www.youtube.com/watch?v=i41KoE0iMYU" target="_blank">
                <NuxtImg src="/touhou.gif" alt="" />
            </a>
            <a href="https://www.mozilla.org/en-US/firefox/all/#product-desktop-release" target="_blank">
                <NuxtImg src="/firefox4.gif" alt="" />
            </a>
            <NuxtImg src="/i-know-her.png" alt="" />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    justify-content: space-between;
    align-content: center;
    border-top: .125rem solid;
    font-size: 1em;
    padding: $half-spacing-unit 0;
    margin-top: $half-spacing-unit;
    height: 100%;
}

#text {
    justify-content: center;
}

#gifs {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    gap: 1rem;

    :nth-child(2n) {
        align-self: self-end;
    }

    a {
        display: flex;
        padding: 0;
        margin: 0;
    }

    img, picture {
        width: 88px;
        height: 31px;
        aspect-ratio: 88 / 31;
    }
}

@include media-query($on-palm) {
    #gifs {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        gap: 1rem;
    }
}
</style>
