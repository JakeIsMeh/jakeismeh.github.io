<script setup>
import "assets/app.scss"

const route = useRoute()

useHead({ 
    titleTemplate: (title) => { return title ? `${title} | JakeIsMeh` : 'JakeIsMeh' }, 
})

</script>

<template>
    <NuxtLoadingIndicator color="var(--t-pink-text)" />
        <NuxtErrorBoundary>
            <NuxtLayout>
                <NuxtErrorBoundary>
                    <NuxtPage />
                </NuxtErrorBoundary>
          </NuxtLayout>
    </NuxtErrorBoundary>
</template>
