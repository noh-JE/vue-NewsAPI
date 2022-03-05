<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/news">news</router-link></li>
        <li><router-link to="/jobs">jobs</router-link></li>
        <li><router-link to="/ask">ask</router-link></li>
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
header {
  width: 100%;
  margin-bottom: 50px;
  background: lavender;
}
header nav {
  padding: 15px 25px;
}
header ul {
  display: flex;
  align-content: center;
  justify-content: space-around;
}
header li a {
  padding: 10px 20px;
  color: #000;
}
header li a:hover {
  color: purple;
  text-decoration: underline;
}
.router-link-exact-active,
.router-link-active {
  color: purple;
  font-weight: bolder;
}
</style>