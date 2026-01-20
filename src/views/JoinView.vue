<template>
  <div class="page">
    <h1>Zapoj sa</h1>
    <UserProfile/>
    <div class="steps">
      <div class="step">
        <h3>1️⃣ Vyber si beh</h3>
        <p>Pozri si aktuálne charitatívne výzvy a vyber si tú, do ktorej sa chceš zapojiť.</p>
      </div>
      <div class="step">
        <h3>2️⃣ Behaj vlastným tempom</h3>
        <p>Behaj kedykoľvek a kdekoľvek. Každý kilometer sa počíta.</p>
      </div>
      <div class="step">
        <h3>3️⃣ Pridaj kilometre</h3>
        <p>Na stránke konkrétneho behu jednoducho zadáš počet kilometrov, ktoré si odbehla.</p>
      </div>
    </div>
    <RouterLink to="/events" class="cta-button">Pozrieť bežecké výzvy</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import UserProfile from '../components/UserProfile.vue'

export default {
  name: 'JoinView',
  components: {
    RouterLink,
    UserProfile
  }
}
</script>

<style scoped>
.intro {
  max-width: 700px;
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.step {
  max-width: 300px;
}

.cta-button {
  display: inline-block;
  background-color: #4CAF50;
  color: rgb(255, 255, 255);
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #43a047;
}
</style>
