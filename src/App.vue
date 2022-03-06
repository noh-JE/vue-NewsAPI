<template>
  <div id="app">
    <HeaderView />
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView';

export default {
  name: 'App',
  components: {
    HeaderView,
  }
}
</script>

<style lang="css">
  @import "assets/css/style.css";
  /* we will explain what these classes do next! */
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.2s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
