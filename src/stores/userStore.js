import { defineStore } from 'pinia'

const USER_KEY = 'miles_for_smiles_user'

export const useUserStore = defineStore('user', {
  state: () => ({
    availableKm: Number(localStorage.getItem('availableKm')) || 568,
    donatedKm: Number(localStorage.getItem('donatedKm')) || 0
  }),

  getters: {
    donatedEur(state) {
      return (state.donatedKm * 0.05).toFixed(2)
    }
  },

  actions: {
    useKilometers(km) {
      if (km > this.availableKm) return false

      this.availableKm -= km
      this.donatedKm += km
      this.saveUser()
      return true
    },

    saveUser() {
      localStorage.setItem('availableKm', this.availableKm)
      localStorage.setItem('donatedKm', this.donatedKm)
    }
  }
})
