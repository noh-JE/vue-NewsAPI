<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
        <li><router-link to="/ask">Ask</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style scoped>
  li {
    position: relative;
  }
  li:nth-child(2):before {
    left: -50px;
  }
  li:nth-child(2):after {
    right: -50px;
  }
</style>