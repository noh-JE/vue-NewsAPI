<template>
  <div>
    <h1>News</h1>

    <ul>
      <li v-for="item in news" v-bind:key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsAPI } from '@/api';

export default {
  name: 'NewsView',
  data() {
    return {
      news: []
    }
  },
  created() {
    fetchNewsAPI()
        .then(response => {
          this.news = response.data
        })
        .catch(error => {
          console.log (error)
        })
  }
}
</script>

<style scoped>

</style>