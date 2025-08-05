<script setup>
import "assets/app.scss"
defineOgImageComponent('template')
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--t-pink-bg)" />
        <NuxtErrorBoundary>
            <NuxtLayout>
                <NuxtErrorBoundary>
                    <NuxtPage />
                </NuxtErrorBoundary>
          </NuxtLayout>
    </NuxtErrorBoundary>
</template>
