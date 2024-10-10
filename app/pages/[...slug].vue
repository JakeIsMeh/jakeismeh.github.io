<template>
    <ContentQuery :path="$route.path" find="one">
        <template #default="{ data: doc }">
            <Title>{{ doc.title }}</Title>
            <!-- <StaticMarkdownRenderer :value="doc" /> -->
            <StaticMarkdownRenderer :path="doc._path" />
        </template>
        <template #empty>
            <h1>Document is empty</h1>
        </template>
        <template #not-found>
            <NotFound />
        </template>
    </ContentQuery>
</template>
