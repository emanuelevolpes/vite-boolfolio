<template>
    <main>
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">Details</router-link>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}

</script>

<style lang="scss" scoped>

</style>