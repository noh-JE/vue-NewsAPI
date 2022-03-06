<template>
  <div class="contents">
    <h1>Ask Comment</h1>
    <section>
      <div class="ask-user">
        <strong>User Info</strong>
        <router-link v-bind:to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        <p>{{fetchedItem.time_ago}}</p>
      </div>

      <div class="comment">
        <strong>COMMENT</strong>
        <div v-html="fetchedItem.content" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ItemView',
  computed: {
    ...mapGetters([
        'fetchedItem'
    ])
  },
  created() {
    const itemID = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemID)
  }
}
</script>