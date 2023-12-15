<script>
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';

    let menuOpen = false;

    afterNavigate(() => {menuOpen = false;});
</script>

<div class="header">
    <h1><a href="/">JakeIsMeh</a></h1>

    <nav class="site-nav">
        <!-- TODO: redo responsive navbar with focus-within -->
        <input type="checkbox" id="nav-trigger" class="nav-trigger" bind:checked={menuOpen}/>
        <label for="nav-trigger">
            <span class="menu-icon">
                <svg width="18px" height="15px">
                    <path
                        d="M18,1.5c0,.8-.7,1.5-1.5,1.5h-15C.7,3,0,2.3,0,1.5S.7,0,1.5,0h15c.8,0,1.5.7,1.5,1.5zm0,6c0,.8-.7,1.5-1.5,1.5h-15C.7,9,0,8.3,0,7.5S.7,6,1.5,6h15c.8,0,1.5.7,1.5,1.5zm0,6c0,.8-.7,1.5-1.5,1.5h-15C.7,15,0,14.3,0,13.5S.7,12,1.5,12h15c.8,0,1.5.7,1.5,1.5z"
                    />
                </svg>
            </span>
        </label>
        <div class="trigger">
            <a class="nav-link" class:active={$page.url.pathname == "/"} href="/">Home</a>
            <a class="nav-link" class:active={$page.url.pathname == "/about"} href="/about">About</a>
            <a class="nav-link" class:active={$page.url.pathname == "/projects"} href="/projects">Projects</a>
        </div>
    </nav>
</div>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 > a {
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
        margin-bottom: $quarter-spacing-unit;
        border-bottom: 1px solid var(--t-text);
    }

    h1 {
        display: inline;
    }

    .site-nav {
        font-family: $header-font-family;
        float: right;
        margin-right: -0.3125em; // compensate padded link (.25em @ 1.25em)

        .nav-trigger {
            display: none;
        }

        .menu-icon {
            display: none;
        }

        .nav-link {
            font-size: 1.25em;
            color: var(--t-text);
            font-weight: bold;
            transition: color 0.16s, background-color 0.16s;
            padding: 0 0.25em;
            margin: 0; // reset app.scss margin

            // Gaps between nav items, but not on the last one
            &:not(:last-child) {
                margin-right: 0.825rem;
            }

            &:hover,
            &:focus,
            &.active {
                color: var(--t-bg);
                background-color: var(--t-text);
            }
        }

        @include media-query($on-palm) {
            position: absolute;
            top: $half-spacing-unit;
            right: $half-spacing-unit;
            background-color: var(--t-bg);
            border: 1px solid var(--t-text);
            border-radius: $radius;
            text-align: right;
            margin-right: 0; // negate right margin in menu

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
                float: right;
                width: 2.25rem;
                height: 2.25rem;
                line-height: 0;
                text-align: center;

                > svg {
                    margin-top: 10px;
                    fill: var(--t-text);
                }
            }

            input ~ .trigger {
                min-width: unset;
                min-height: unset;
                clear: both;
                display: none;
            }

            input:checked ~ .trigger {
                display: block;
                padding-bottom: 5px;
            }

            .nav-link {
                display: block;
                padding: 5px 10px;

                // cancel the earlier rule
                &:not(:last-child) {
                    margin-right: 0;
                }
            }
        }
    }
</style>
