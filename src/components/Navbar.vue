<template>
  <nav class="navbar">
    <div class="navbar-content">
      <RouterLink to="/" class="logo"> Miles for Smiles </RouterLink>
      <div class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/events" exact-active-class="active">Behy</RouterLink>
        <RouterLink to="/join" exact-active-class="active">Zapoj sa</RouterLink>
        <RouterLink to="/about" exact-active-class="active">O projekte</RouterLink>
        <router-link to="/support">Podporte nás</router-link>

        <router-link to="/cart" class="cart">
          🛒 {{ cartStore.totalItems }}
        </router-link>

      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'Navbar',
  components: {
    RouterLink
  },
  computed: {
    cartStore() {
      return useCartStore()
    },
    totalItems() {
      return this.cartStore.totalItems
    }
  }
}
</script>

<style scoped>
/* celý navbar */
.navbar {
  background-color: #4CAF50; /* zelená */
  padding: 1rem 0;
}

/* vnútorný obsah */
.navbar-content {
  width: 100%;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* logo */
.logo {
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* odkazy */
.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

/* hover efekt */
.nav-links a:hover {
  color: #033501a6; /* jemná žltá/oranžová */
}

/* aktívna stránka */
.nav-links a.active {
  border-bottom: 2px solid #03350165;
  padding-bottom: 2px;
}

/* responzivita */
@media (max-width: 600px) {
  .navbar-content {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
