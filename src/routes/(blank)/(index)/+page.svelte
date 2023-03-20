<script>
    import '~/app.scss';
    import IconGitlab from 'virtual:icons/feather/gitlab';
    import IconGitlhub from 'virtual:icons/feather/github';
    import IconExtLink from 'virtual:icons/feather/external-link';
</script>

<div class="main">
    <img
        src="https://avatars.githubusercontent.com/JakeIsMeh"
        alt="profile pic"
        class="pfp"
    />
    <div class="spacer" />
    <h1><a href="/">JakeIsMeh</a></h1>
    <div class="spacer" />
    <p><a href="/about" class="nav-link">About</a></p>
    <p><a href="/projects" class="nav-link">Projects</a></p>
    <div class="spacer" />
    <p><a href="https://gitlab.com/JakeIsMeh" class="nav-link"><IconGitlab/>GitLab<IconExtLink/></a></p>
    <p><a href="https://github.com/JakeIsMeh" class="nav-link"><IconGitlhub/>GitHub<IconExtLink/></a></p>
</div>

<style lang="scss">
    .main {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.25em;
        padding: $half-spacing-unit 0;
    }
    h1 > a {
        text-decoration: none;
        &,
        &:visited {
            transition: 0.16s;
            color: $text-color;
        }
        &:hover,
        &:focus {
            background-color: unset;
            color: $text-color;
        }
    }
    .spacer { height: 1.75rem; }
    a.nav-link {
        font-size: 1.5em;
        color: $text-color;
        line-height: $base-line-height;
        transition: .16s;
        padding: 0 .25em;
        margin: 0; // reset margin.scss
    }
    a.nav-link:hover, a.nav-link:focus {
        color: $background-color;
        background-color: $text-color;
    }
    img.pfp {
        width: auto;
        max-height: 16rem;
        border: calc($radius / 4) solid $text-color;
        border-radius: $radius;
        background-color: deeppink;
    }
</style>