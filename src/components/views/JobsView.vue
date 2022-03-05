<template>
  <div class="contents">
    <h1>Jobs</h1>
    <ul>
      <li v-for="list in this.$store.state.jobs" v-bind:key="list.id">
        <a class="title" v-bind:href="list.url" target="_blank">{{ list.title }}</a>
        <div class="info">
          <p class="date">작성일 : {{ list.time_ago }}</p>
          <div v-if="list.user">
            <span>작성자 : </span><a class="user">{{ list.user }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'JobsNews',
  computed: {
    ...mapGetters([
        'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>