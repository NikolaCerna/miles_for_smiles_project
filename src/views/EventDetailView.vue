<template>
  <div class="page" v-if="event">
    <button class="back" @click="$router.back()">
      ← Späť
    </button>
    <h1 class="title">{{ event.title }}</h1>
    <div class="detail-grid">
      <div class="card">
        <h3>O behu</h3>
        <p>{{ event.description }}</p>
        <p><strong>Dátum:</strong> {{ event.date }}</p>
        <p><strong>Celkový počet kilometrov:</strong> {{ event.totalKm }} km</p>
        <ProgressBar :current="event.totalKm" :goal="1000"/>
      </div>
      <div class="card highlight">
        <h3>Zapoj sa</h3>
        <p>Pridaj svoje kilometre a pomôž dobrej veci.</p>
        <p class="available-km"> Dostupné kilometre: <strong>{{ user.availableKm }} km</strong></p>
        <input type="number" min="1" v-model.number="kilometers" placeholder="Zadaj počet km"/>
        <button @click="addKm" :disabled="isDisabled" >Pridať kilometre</button>
      </div>
      <v-alert v-if="showThanks" type="success" variant="tonal" class="mb-4">💚 Ďakujeme! Tvoje kilometre boli úspešne pridané.</v-alert> <!--Vuetify-->
    </div>
  </div>
</template>

<script>
import { useEventStore } from '@/stores/eventStore'
import ProgressBar from '@/components/ProgressBar.vue'
import { useUserStore } from '@/stores/userStore'

export default {
  name: 'EventDetailView',
  data() {
    return {
      kilometers: 0,
      showThanks: false
    }
  },
  components: {
    ProgressBar
  },
  computed: {
    event() {
      const store = useEventStore()
      return store.getEventBySlug(this.$route.params.slug)
    },
    user() {
      return useUserStore()
    },
    isDisabled() {
      return (
        this.kilometers <= 0 ||
        this.kilometers > this.user.availableKm ||
        this.user.availableKm === 0
      )
    }
  },
  watch: {
    event: {
      immediate: true,
      handler(newEvent) {
        if (!newEvent) {
          this.$router.replace({ name: 'not-found' })
        }
      }
    },
    kilometers(newValue) {
      if (newValue < 0) {
        this.kilometers = 0
      }

      if (newValue > this.user.availableKm) {
        this.kilometers = this.user.availableKm
      }
    },
  },
  methods: {
    addKm() {
      if (this.kilometers <= 0) return

      const eventStore = useEventStore()
      const userStore = useUserStore()

      const success = userStore.useKilometers(this.kilometers)

      if (success) {
        eventStore.addKilometers(this.event.slug, this.kilometers)
        this.kilometers = 0

        this.showThanks = true
        setTimeout(() => {
          this.showThanks = false
        }, 3000)
      } else {
        alert('Nemáš dostatok dostupných kilometrov.')
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 2rem;
}

/* GRID */
.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/* BOX */
.card {
  background-color: white;
  color: black;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card h3 {
  margin-top: 0;
}

/* ZVÝRAZNENÝ BOX */
.card.highlight {
  border-left: 6px solid #4CAF50;
}

/* INPUT + BUTTON */
input {
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
}

button {
  width: 100%;
  padding: 0.6rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 800px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}

.available-km {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
}

.available-km strong {
  color: #4CAF50;
}

button:disabled {
  opacity: 0.6;
}

.back {
  background: none;
  border: none;
  padding: 0;
  width: auto;

  color: #4CAF50;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 1rem;
}


</style>
