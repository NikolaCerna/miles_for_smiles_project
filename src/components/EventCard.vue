<template>
  <div class="event-card">
    <h3>{{ title }}</h3>
    <p class="description"> {{ description }} </p>
    <p class="date"> {{ date }} </p>
    <RouterLink :to="`/events/${id}`" class="detail-link"> Zobraziť detail </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'EventCard',
  components: {
    RouterLink
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  max-width: 300px;
}

.description {
  margin: 0.5rem 0;
}

.date {
  font-size: 0.9rem;
  color: #555;
}

.detail-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #2c7be5;
  text-decoration: none;
}
</style>
