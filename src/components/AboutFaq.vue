<template>
  <section class="faq">
    <h2>Časté otázky</h2>
    <FaqItem v-for="item in faq" :key="item.id" :question="item.question">
    <template v-if="item.type === 'text'">{{ item.answer }}</template>
    <template v-else-if="item.type === 'address'">Nájdete nás na adrese: <strong>{{ contactInfo.address }}</strong></template>
    <template v-else-if="item.type === 'hours'">Otvorené máme: <strong>{{ contactInfo.pickupHours }}</strong></template>
    <template v-else-if="item.type === 'contact'">📧 {{ contactInfo.email }} <br />📞 {{ contactInfo.phone }}</template>
    </FaqItem>
  </section>
  <button class="back" @click="$router.back()">
    ← Skryť časté otázky
  </button>
</template>

<script>
import faq from '@/data/faq.json'
import FaqItem from '@/components/FaqItem.vue'

export default {
  name: 'AboutFaq',
  components: { FaqItem },
  inject: ['contactInfo'],
  data() {
    return { faq }
  }
}
</script>

<style>
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
