<template>
  <div class="event-card">
    <h3>{{ title }}</h3>
    <p class="description"> {{ description }} </p>
    <p class="date"> {{ date }} </p>
    <RouterLink :to="`/events/${slug}`" class="detail-link"> Zobraziť detail </RouterLink>
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
    slug: {
      type: String,
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
  background-color: white;
  border-radius: 12px;
  padding: 1.2rem;
  width: 280px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.event-card h3 {
  margin-top: 0;
  color: #333;
}

.description {
  color: #555;
  margin: 0.6rem 0;
}

.date {
  font-size: 0.9rem;
  color: #777;
}

.detail-link {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.4rem 0.8rem;

  background-color: #4CAF50;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.detail-link:hover {
  background-color: #43a047;
}

</style>
