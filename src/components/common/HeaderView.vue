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