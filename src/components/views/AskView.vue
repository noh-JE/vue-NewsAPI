<template>
  <div class="contents">
    <h1>Ask</h1>
    <ul>
      <li v-for="list in askItems" v-bind:key="list.id">
        <router-link v-bind:to="`item/${list.id}`">{{ list.title }}</router-link>
<!--        <a class="title" v-bind:href="list.url"></a>-->
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