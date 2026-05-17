<script setup>
import "assets/app.scss"
import "assets/prose_hoisted.scss"
// defineOgImage('template')
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
