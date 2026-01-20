<template>
  <div class="page">
    <h1>Behy a výzvy</h1>
    <EventList :events="events"/>
  </div>
</template>

<script>
import { useEventStore } from '../stores/eventStore'
import EventList from '../components/EventList.vue'

export default {
  name: 'EventsView',
  components: {
    EventList
  },
  computed: {
    events() {
      const store = useEventStore()
      return store.events
    }
  }
}
</script>
