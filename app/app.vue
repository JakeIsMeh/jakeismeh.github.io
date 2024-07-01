<script setup>
import "assets/app.scss"

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
