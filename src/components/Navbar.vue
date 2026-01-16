<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/events">Behy</RouterLink>
    <RouterLink to="/join">Zapoj sa</RouterLink>
    <RouterLink to="/about">O projekte</RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Navbar',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
nav {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
