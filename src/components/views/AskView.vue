<template>
  <div>
    <h1>Ask</h1>

    <ul>
      <li v-for="list in this.$store.state.ask" v-bind:key="list.id">{{ list.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AskView',
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>