<template>
  <div class="ask-user">
    <!-- slot 상위 컴포넌트에서 정의할 영역 -->
    <!-- 미완성 상태로 냅둠 -->
    <slot name="username" />
    <p>
      <slot name="time" />
      <slot name="karma" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    info: Object
  }
}
</script>

<style scoped>

</style>