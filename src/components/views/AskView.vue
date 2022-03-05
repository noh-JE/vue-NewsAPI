<template>
  <div class="contents">
    <h1>Ask</h1>
    <ul>
      <li v-for="list in askItems" v-bind:key="list.id">
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
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex'
export default {
  name: 'AskView',
  computed: {
    ...mapGetters({
      askItems: 'fetchedAsk'
    })
  },
  // computed: {
  //   ...mapState({
  //     ask: state => state.ask
  //   })
  // },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>