<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
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
  <AppHeader />
  <AppMain/>
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
