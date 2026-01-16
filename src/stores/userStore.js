import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Hosť',
    availableKm: Number(localStorage.getItem('user_km')) || 250
  }),

  actions: {
    useKilometers(km) {
      if (km <= this.availableKm) {
        this.availableKm -= km
        localStorage.setItem('user_km', this.availableKm)
        return true
      }
      return false
    }
  }
})
