<template>
  <div>
    <h1>Jobs</h1>

    <ul>
      <li v-for="list in this.$store.state.jobs" v-bind:key="list.id">{{ list.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JobsNews',
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>