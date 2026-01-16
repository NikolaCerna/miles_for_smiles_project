<template>
  <div>
    <h1>Behy a výzvy</h1>

    <EventList :events="events" />
  </div>
</template>

<script>
import EventList from '@/components/EventList.vue'

export default {
  name: 'EventsView',

  components: {
    EventList
  },

  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Beh pre detský úsmev',
          description: 'Charitatívny beh na podporu detí v nemocniciach.',
          date: '15. máj 2026'
        },
        {
          id: 2,
          title: 'Kilometre nádeje',
          description: 'Každý kilometer pomáha tým, ktorí to potrebujú.',
          date: '1. jún 2026'
        },
        {
          id: 3,
          title: 'Miles for Smiles',
          description: 'Spojme sa a pomôžme úsmevom cez pohyb.',
          date: '20. jún 2026'
        }
      ]
    }
  }
}
</script>
