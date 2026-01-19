<template>
  <div class="page not-found">
    <h1>404</h1>
    <p>Stránka, ktorú hľadáš, neexistuje.</p>

    <router-link to="/" class="home-link">
      Späť na domov
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 4rem;
}

.not-found h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #4CAF50;
}

.home-link {
  display: inline-block;
  margin-top: 1.5rem;
  color: white;
  background-color: #4CAF50;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
}
</style>
