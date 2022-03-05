<template>
  <div id="app">
    <HeaderView />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from '@/components/common/HeaderView';

export default {
  name: 'App',
  components: {
    HeaderView,
  }
}
</script>

<style lang="css">
  @import "assets/css/style.css";
</style>
