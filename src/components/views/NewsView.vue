<template>
  <div class="contents">
    <h1>News</h1>
    <ul>
      <li v-for="list in NewsItems" v-bind:key="list.id">
        <a class="title" v-bind:href="list.url" target="_blank">{{ list.title }}</a>
        <div class="info">
          <p class="date">작성일 : {{ list.time_ago }}</p>
          <div v-if="list.user">
            <span>작성자 : </span>
            <router-link class="user" v-bind:to="`/user/${list.user}`">{{ list.user }}</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewsView',
  computed: {
    ...mapGetters({
      NewsItems: 'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>