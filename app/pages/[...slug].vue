<template>
    <ContentDoc :head="false">
        <template v-slot="{ doc }">
            <Title>{{ doc.title }}</Title>
            <StaticMarkdownRenderer :value="doc" />
        </template>
        <template #empty>
            <h1>Document is empty</h1>
        </template>
        <template #not-found>
            <NotFound />
        </template>
    </ContentDoc>
</template>
