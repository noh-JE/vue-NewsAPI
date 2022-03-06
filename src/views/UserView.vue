<template>
  <div class="contents">
    <h1>User Information</h1>

    <p><span>USER : </span>{{ userInfo.id }}</p>
    <p><span>DATE : </span>{{ userInfo.created }}</p>
    <p><span>KARMA : </span>{{ userInfo.karma }}</p>
  </div>
</template>

<script>

export default {
  name: 'UserView',
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