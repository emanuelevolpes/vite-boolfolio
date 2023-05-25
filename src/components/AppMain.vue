<script>
import AppProjectCard from './AppProjectCard.vue';

export default {
    name: "AppMain",
    components: { AppProjectCard }
}
</script>

<template>
    <main>
        <AppProjectCard :data="projects"/>
    </main>
</template>

<style lang="scss" scoped></style>