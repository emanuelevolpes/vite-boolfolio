<script>
import AppProjectCard from './AppProjectCard.vue';

export default {
    name: "AppMain",
    components: { AppProjectCard }
}
</script>

<template>
    <main>
<<<<<<< HEAD
        <AppProjectCard :data="projects"/>
=======
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> parent of 3a9b7ba (title and content)
    </main>
</template>

<style lang="scss" scoped></style>