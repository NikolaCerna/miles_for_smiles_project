<template>
  <div class="page">
    <h1>Podporte nás 💚</h1>
    <div class="products">
      <div v-for="product in cartStore.products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image"/>
        <h3>{{ product.name }}</h3>
        <p class="desc">{{ product.description }}</p>
        <p class="price">{{ product.price }} €</p>
        <button @click="cartStore.addToCart(product)">Pridať do košíka</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'SupportView',
  computed: {
    cartStore() {
      return useCartStore()
    }
  }
}
</script>

<style scoped>
.price {
  font-weight: bold;
  margin: 0.5rem 0;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.product-card {
  background: white;
  color: black;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.desc {
  font-size: 0.9rem;
  color: #555;
}

.price {
  font-weight: bold;
  margin: 0.7rem 0;
}

button {
  margin-top: auto;
  width: 100%;
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #43a047;
}
</style>