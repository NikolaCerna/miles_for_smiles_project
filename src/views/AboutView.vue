<template>
  <div class="page about">
    <section class="hero">
      <h1>O projekte Miles for Smiles</h1>
      <p class="hero-text">Miles for Smiles je charitatívna aplikácia, ktorej cieľom je prepájať pohyb s pomocou ľuďom bojujúcim s vážnymi ochoreniami. Veríme, že aj malé kroky môžu mať veľký význam.</p>
    </section>
    <section class="info-card">
      <h2>Kto sme</h2>
      <p>Miles for Smiles je študentský projekt, ktorý simuluje fungovanie modernej charitatívnej aplikácie. Zameriava sa na podporu chorých detí a dospelých prostredníctvom pohybu.</p>
      <p>Našou myšlienkou je ukázať, že pomoc nemusí byť výhradne finančná. Aj obyčajný pohyb - beh, chôdza alebo turistika - môže mať pozitívny spoločenský dopad.</p>
    </section>
    <section class="info-card highlight">
      <h2>Ako pomáhame</h2>
      <p class="conversion"><strong>1 kilometer = 0,05 €</strong></p>
      <p>Používatelia aplikácie zaznamenávajú svoje odbehnuté alebo odchodené kilometre v rámci charitatívnych výziev.</p>
      <p>Každý kilometer má symbolickú finančnú hodnotu 0,05 €. Nazbierané kilometre sa prepočítavajú na finančnú pomoc, ktorá predstavuje podporu liečby, rehabilitácií a zdravotnej starostlivosti pre ľudí v náročných životných situáciách.</p>
    </section>
    <section class="info-card">
      <h2>Prečo to robíme</h2>
      <p>Projekt vznikol z presvedčenia, že pohyb môže mať hlbší význam než len zlepšenie fyzickej kondície.</p>
      <p>Naším cieľom je budovať komunitu ľudí, ktorí si uvedomujú, že aj malé každodenné aktivity môžu pomôcť tým, ktorí to najviac potrebujú.</p>
    </section>
    <img src="/about-community.jpg" alt="Komunita a pomoc druhým" class="inline-image"/>
    <section class="faq">
      <h2>Časté otázky</h2>
      <FaqItem v-for="item in faq" :key="item.id" :question="item.question">
        <template v-if="item.type === 'text'">{{ item.answer }}</template>
        <template v-else-if="item.type === 'address'">Nájdete nás na adrese: <strong>{{ contactInfo.address }}</strong></template>
        <template v-else-if="item.type === 'hours'">Otvorené máme: <strong>{{ contactInfo.pickupHours }}</strong></template>
        <template v-else-if="item.type === 'contact'">📧 {{ contactInfo.email }} <br />📞 {{ contactInfo.phone }}</template>
      </FaqItem>
    </section>
  </div>
</template>

<script>
import faq from '@/data/faq.json'
import FaqItem from '@/components/FaqItem.vue'

export default {
  name: 'AboutView',
  components: { FaqItem },
  inject: ['contactInfo'],
  data() {
    return {
      faq
    }
  }
}
</script>


<style scoped>
.about {
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* HERO */
.hero {
  margin-bottom: 3rem;
}

.hero-text {
  font-size: 1.1rem;
  color: #ccc;
}

/* INFO KARTY */
.info-card {
  background-color: #1f1f1f;
  padding: 2rem;
  border-radius: 14px;
  margin-bottom: 2.5rem;
}

.info-card.highlight {
  border-left: 6px solid #4CAF50;
}

.info-card h2 {
  margin-bottom: 1rem;
}

.conversion {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4CAF50;
}

/* OBRÁZOK */
.inline-image {
  width: 100%;
  max-width: 700px;
  margin: 3rem auto;
  display: block;
  border-radius: 14px;
}

/* FAQ */
.faq {
  margin-top: 3rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.faq-item h4 {
  color: #4CAF50;
  margin-bottom: 0.3rem;
}

.faq-item p {
  margin-left: 0.5rem;
  color: #bbb;
}
</style>
