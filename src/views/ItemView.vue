<template>
  <div class="contents">
    <h1>Ask Comment</h1>
    <section>
      <user-profile :info="fetchedItem">
        <router-link :to="`/user/${fetchedItem.user}`" slot="username">username : {{fetchedItem.user}}</router-link>
        <template slot="time">{{fetchedItem.time_ago}}</template>
      </user-profile>
      <div class="comment">
        <strong>COMMENT</strong>
        <div v-html="fetchedItem.content" />
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile';
import { mapGetters } from 'vuex';

export default {
  name: 'ItemView',
  components: {
    UserProfile
  },
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