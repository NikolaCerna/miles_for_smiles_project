import { defineStore } from 'pinia'

const STORAGE_KEY = 'miles_for_smiles_events'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
      {
        id: 1,
        title: 'Beh pre detský úsmev',
        description: 'Charitatívny beh na podporu detí v nemocniciach.',
        date: '15. máj 2026',
        totalKm: 120
      },
      {
        id: 2,
        title: 'Kilometre nádeje',
        description: 'Každý kilometer pomáha tým, ktorí to potrebujú.',
        date: '1. jún 2026',
        totalKm: 75
      },
      {
        id: 3,
        title: 'Miles for Smiles',
        description: 'Spojme sa a pomôžme úsmevom cez pohyb.',
        date: '20. jún 2026',
        totalKm: 200
      }
    ]
  }),

  getters: {
    getEventById: (state) => {
      return (id) => state.events.find(event => event.id === Number(id))
    }
  },

  actions: {
    addKilometers(eventId, km) {
      const event = this.events.find(e => e.id === eventId)
      if (event) {
        event.totalKm += km
        this.saveToStorage()
      }
    },

    saveToStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.events))
    }
  }
})
