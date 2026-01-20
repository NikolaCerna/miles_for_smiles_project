<template>
  <div class="hero">
    <div class="hero-content">
      <h1>Miles for Smiles</h1>
      <p>Charitatívny beh, kde každý kilometer pomáha priniesť úsmev tým, ktorí ho najviac potrebujú.</p>
      <RouterLink to="/events" class="hero-button"> Pozrieť výzvy </RouterLink>
    </div>
  </div>
  <section class="section light">
    <h2>Ako to funguje?</h2>
    <div class="steps">
      <div class="step">
        <h3>1️⃣ Vyber si výzvu</h3>
        <p>Vyber si charitatívny beh, do ktorého sa chceš zapojiť.</p>
      </div>
      <div class="step">
        <h3>2️⃣ Behaj kilometre</h3>
        <p>Každý kilometer, ktorý odbehneš, sa počíta.</p>
      </div>
      <div class="step">
        <h3>3️⃣ Pomáhaj úsmevom</h3>
        <p>Tvoje kilometre pomáhajú tým, ktorí to najviac potrebujú.</p>
      </div>
    </div>
  </section>
  <section class="section dark">
    <h2>Prečo sa zapojiť?</h2>
    <div class="benefits">
      <p>💚 Spojíš pohyb s pomocou</p>
      <p>😊 Každý kilometer má zmysel</p>
      <p>🏃‍♀️ Bežíš vlastným tempom</p>
      <p>🤝 Si súčasťou komunity</p>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'HomeView',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url('/hero.jpg');
  background-size: cover;
  background-position: center;

  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  color: white;
  max-width: 600px;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-button {
  background-color: #FF9800;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.hero-button:hover {
  background-color: #fb8c00;
}

.section {
  padding: 4rem 1rem;
  text-align: center;
}

.section h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.section.light {
  background-color: #f9f9f9;
  color: black;
}

.section.dark {
  background-color: #4CAF50;
  color: white;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.step {
  max-width: 300px;
}

.benefits {
  font-size: 1.1rem;
  line-height: 2;
}
</style>
