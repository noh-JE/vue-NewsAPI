<template>
  <div>
    <h1>News</h1>

    <ul>
      <li v-for="list in this.$store.state.news" v-bind:key="list.id">{{ list.title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NewsView',
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>