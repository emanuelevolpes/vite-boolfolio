<script>
import axios from 'axios';
import CardProject from '../components/CardProject.vue';

export default {
    name: 'ProjectsPage',
    components: {
        CardProject
    },
    data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios
        .get(this.apiBaseUrl + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.return;
        }).catch((error) => {
          console.log(error);
        })
    }
  },
  created() {
    this.getProjects();
  }
}

</script>

<template>
    <section>
        <h1 class="text-center p-4">Projects</h1>
        <main>
            <div class="container">
                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="project in projects">
                    <CardProject :project="project" />
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<style lang="scss" scoped>

</style>