<template>
  <div id="app">
    <header-view />
    <transition name="page">
      <router-view></router-view>
    </transition>
    <loading-spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView';
import LoadingSpinner from '@/components/LoadingSpinner';
import bus from '@/utils/bus';

export default {
  name: 'App',
  components: {
    HeaderView,
    LoadingSpinner,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.log (process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    // 이벤트 객체가 쌓이는 것을 방지,
    // 이벤트 역할이 끝나면 이벤트가 쌓이지 않고 해지가 됨
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
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
