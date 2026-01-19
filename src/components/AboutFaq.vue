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
  <RouterLink to="/about" class="back-link">
    ← Skryť časté otázky
  </RouterLink>
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
