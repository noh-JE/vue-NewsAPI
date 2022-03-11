<template>
  <div class="contents">
    <user-profile :info="userInfo">
      <p slot="username"><span>USER : </span>{{ userInfo.id }}</p>
      <p slot="time">{{'Joined ' + userInfo.created }}</p>
      <p slot="karma"><span>KARMA : </span>{{ userInfo.karma }}</p>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile';

export default {
  name: 'UserView',
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName); //payload 인자 전달
  }
}
</script>