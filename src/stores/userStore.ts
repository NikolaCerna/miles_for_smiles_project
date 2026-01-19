import { defineStore } from 'pinia'
import type { User } from '../types/user'

const USER_KEY = 'miles_for_smiles_user'

export const useUserStore = defineStore('userStore', {
  state: (): User => ({
    availableKm: Number(localStorage.getItem('availableKm')) || 568,
    donatedKm: Number(localStorage.getItem('donatedKm')) || 0
  }),

  getters: {
    donatedEur(state): string {
      return (state.donatedKm * 0.05).toFixed(2)
    }
  },
  actions: {
    useKilometers(km: number): boolean {
      if (km > this.availableKm) return false

      this.availableKm -= km
      this.donatedKm += km
      this.saveUser()
      return true
    },
    saveUser() {
      localStorage.setItem('availableKm', String(this.availableKm))
      localStorage.setItem('donatedKm', String(this.donatedKm))
    }
  }
})