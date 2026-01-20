<template>
  <nav class="navbar">
    <div class="navbar-content">
      <RouterLink to="/" class="logo">Miles for Smiles</RouterLink>
      <div class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/events" exact-active-class="active">Behy</RouterLink>
        <RouterLink to="/join" exact-active-class="active">Zapoj sa</RouterLink>
        <RouterLink to="/about" exact-active-class="active">O projekte</RouterLink>
        <RouterLink to="/support">Podporte nás</RouterLink>
        <RouterLink to="/cart" class="cart">🛒<span v-if="totalItems > 0" class="badge">{{ totalItems }}</span></RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cartStore'

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
  background-color: #4CAF50;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
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

.nav-links a:hover {
  color: #033501a6;
}

.nav-links a.active {
  border-bottom: 2px solid #03350165;
  padding-bottom: 2px;
}

@media (max-width: 600px) {
  .navbar-content {
    flex-direction: column;
    gap: 0.8rem;
  }
}

.cart {
  position: relative;
}

.badge {
  position: absolute;
  top: -6px;
  right: -12px;
  background-color: #af4c4c;
  color: white;
  border-radius: 40%;
  padding: 0.5px 4px;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
