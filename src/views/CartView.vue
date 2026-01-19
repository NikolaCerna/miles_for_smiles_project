<template>
  <div class="page">
    <div v-if="!orderSent">
        <h1>Košík 🛒</h1>
        <div v-if="cartStore.cart.length === 0">
            <p>Košík je prázdny.</p>
        </div>
        <div v-else>
            <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }} € / ks</p>
                <div class="qty">
                    <button @click="cartStore.decreaseQty(item.id)">−</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="cartStore.increaseQty(item.id)">+</button>
                </div>
            </div>
            <h2>Spolu: {{ cartStore.totalPrice }} €</h2>
            <button class="pay" @click="pay">Zaplatiť (dobierka)</button>
        </div>
    </div>
    <div v-else class="thanks">
        <h2>Ďakujeme za objednávku 💚</h2>
        <p>Objednávka bude doručená na odberné miesto.</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'CartView',
  data() {
    return {
      orderSent: false
    }
  },
  computed: {
    cartStore() {
      return useCartStore()
    }
  },
  methods: {
    pay() {
      this.orderSent = true
      this.cartStore.clearCart()
    }
  }
}
</script>

<style scoped>
.cart-item {
  background: white;
  color: black;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.qty {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.qty button {
  width: 30px;
}

.pay {
  margin-top: 1rem;
  width: 100%;
  padding: 0.7rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
}

.thanks {
  text-align: center;
  margin-top: 3rem;
}
</style>
