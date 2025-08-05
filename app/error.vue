<script setup lang="ts">
import "assets/app.scss"
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <NuxtLoadingIndicator color="var(--t-pink-bg)" />
    <NuxtErrorBoundary>
        <NuxtLayout>
            <h1>{{ props.error?.statusCode }}</h1>
            <!-- <p>{{ props.error?.statusMessage }}</p> -->
            <code>{{ props.error?.message }}</code>
        </NuxtLayout>
    </NuxtErrorBoundary>
</template>
