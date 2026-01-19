<template>
  <div class="event-list">
    <EventCard v-for="event in events" :key="event.slug" :slug="event.slug" :title="event.title" :description="event.description" :date="event.date"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
