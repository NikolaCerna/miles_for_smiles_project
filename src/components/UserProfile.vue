<template>
  <div class="profile-card">
    <h3>Môj profil</h3>
    <p class="name">👤 Používateľ: <strong>Nikola</strong></p>
    <p class="km"> Dostupné kilometre: <strong>{{ user.availableKm }} km</strong></p>
    <p><strong>Darované kilometre:</strong> {{ user.donatedKm }} km</p>
    <p><strong>Hodnota daru:</strong> {{ user.donatedEur }} €</p>
    <p class="note"> Tento profil slúži ako koncept používateľského účtu.V reálnej aplikácii by boli kilometre synchronizované z fitness aplikácií (napr. Garmin, Strava).</p>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'

export default {
  name: 'UserProfile',
  computed: {
    user() {
      return useUserStore()
    }
  }
}

</script>

<style scoped>
.profile-card {
  background-color: #fff;
  color: black;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  max-width: 350px;
  margin: 2rem 0;
}

.name,
.km {
  margin: 0.5rem 0;
}

.note {
  font-size: 0.85rem;
  color: #000000;
  margin-top: 1rem;
}
</style>
