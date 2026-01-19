import { defineStore } from 'pinia'
import type { Product } from '../types/product'
import products from '../data/products.json'

interface CartItem extends Product {
  quantity: number
}

const CART_KEY = 'miles_for_smiles_cart'

export const useCartStore = defineStore('cartStore', {
  state: (): { products: Product[]; cart: CartItem[] } => ({
    products,
    cart: JSON.parse(localStorage.getItem(CART_KEY)) || []
  }),

  getters: {
    totalItems(state): number {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice(state): number {
      return state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    }
  },

  actions: {
    saveCart(): void {
      localStorage.setItem(CART_KEY, JSON.stringify(this.cart))
    },

    addToCart(product: Product) {
      const existing = this.cart.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },

    increaseQty(id: number) {
      const item = this.cart.find(i => i.id === id)
      if (item) {
        item.quantity++
        this.saveCart()
      }
    },

    decreaseQty(id: number) {
      const item = this.cart.find(i => i.id === id)
      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.cart = this.cart.filter(i => i.id !== id)
      }
      this.saveCart()
    },

    clearCart() {
      this.cart = []
      this.saveCart()
    }
  }
})
