<script>
import axios from 'axios';
export default {
    name: "ProjectPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject() {
      axios
        .get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
        .then((response) => {
          this.project = response.data.return;
          // console.log(response);
        }).catch((error) => {
          console.log(error);
          this.isError = true;
          this.errorMessage = error.message;
        })
    }
  },
  created() {
    this.getProject();
  }
}
</script>


<template>
    <section v-if="project">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ project.title }}</h1>
            <p>{{ project.description }}</p>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>