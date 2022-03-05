<template>
  <div id="app">
    <HeaderView />
    <div class="contents">
      <!-- contents 영역으로 잡힘 -->
      <router-view></router-view>
    </div>
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

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
