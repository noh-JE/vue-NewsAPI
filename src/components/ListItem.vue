<template>
  <div class="contents">
<!--    <h1>News</h1>-->
    <ul>
      <li v-for="item in listItems" v-bind:key="item.id">
        <!-- title 영역 분기 처리 -->
        <template v-if="item.type !== 'ask'">  <!-- 가상 태그 -->
          <a class="title" :href="item.url" target="_blank">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
        </template>

        <div class="info">
          <p class="date">작성일 : {{ item.time_ago }}</p>
          <div v-if="item.user">
            <span>작성자 : </span>
            <router-link class="user" :to="`/user/${item.user}`">{{ item.user }}</router-link> <span>(points : {{item.points}})</span>
          </div>
          <div v-else>
            <a class="user" :href="`${item.url}`" target="_blank">{{ item.domain }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ListItem', // views page컴포넌트가 갖고있는 fetch, styling 통합
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.news
      } else if(name === 'jobs') {
        return this.$store.state.jobs
      } else if(name === 'ask') {
        return this.$store.state.ask
      }
      return false; //없을 경우 오류남
    }
  }
}
</script>