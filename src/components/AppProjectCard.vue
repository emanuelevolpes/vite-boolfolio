<template>
    <div class="container">
        <div class="row my-4 gy-4">
            <div class="col col-md-4" v-for="project in data">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppProjectCard',
    props: {
        data: Object
    }
}

</script>

<style lang="scss" scoped></style>