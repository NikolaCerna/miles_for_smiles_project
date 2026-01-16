<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <p>{{ event.description }}</p>
    <p><strong>Dátum:</strong> {{ event.date }}</p>
    <p><strong>Celkový počet kilometrov:</strong> {{ event.totalKm }} km</p>

    <hr />

    <h3>Zapoj sa</h3>

    <input
      type="number"
      v-model.number="kilometers"
      placeholder="Zadaj počet km"
    />

    <button @click="addKm">
      Pridať kilometre
    </button>
  </div>

  <div v-else>
    <p>Beh sa nenašiel.</p>
  </div>
</template>

<script>
import { useEventStore } from '@/stores/eventStore'

export default {
  name: 'EventDetailView',

  data() {
    return {
      kilometers: 0
    }
  },

  computed: {
    event() {
      const store = useEventStore()
      return store.getEventById(this.$route.params.id)
    }
  },

  methods: {
    addKm() {
      if (this.kilometers > 0) {
        const store = useEventStore()
        store.addKilometers(this.event.id, this.kilometers)
        this.kilometers = 0
      }
    }
  }
}
</script>

<style scoped>
input {
  margin-right: 0.5rem;
  padding: 0.3rem;
}
</style>
