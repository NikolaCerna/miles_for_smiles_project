import { defineStore } from 'pinia'

const STORAGE_KEY = 'miles_for_smiles_events'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
      {
        id: 1,
        title: 'Beh pre detský úsmev',
        slug: 'beh_pre_detsky_usmev',
        description: 'Charitatívny beh na podporu detí v nemocniciach.',
        date: '15. máj 2026',
        totalKm: 150
      },
      {
        id: 2,
        title: 'Kilometre nádeje',
        slug: 'kilometre_nadeje',
        description: 'Každý kilometer pomáha tým, ktorí to potrebujú.',
        date: '1. jún 2026',
        totalKm: 200
      },
      {
        id: 3,
        title: 'Miles for Smiles',
        slug: 'miles_for_smiles',
        description: 'Spojme sa a pomôžme úsmevom cez pohyb.',
        date: '20. jún 2026',
        totalKm: 80
      }
    ]
  }),
  getters: {
    getEventBySlug: (state) => {
      return (slug) => state.events.find(event => event.slug === slug)
    }
  },
  actions: {
    addKilometers(slug, km) {
      const event = this.events.find(e => e.slug === slug)
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
