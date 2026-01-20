<template>
  <section class="faq">
    <h2>Časté otázky</h2>

    <h4>Ako môžem pomôcť?</h4>
    <p>Zaznamenávaním svojich kilometrov v rámci charitatívnych výziev.</p>

    <h4>Kde nás môžete nájsť?</h4>
    <p>{{ contactInfo.address }}</p>

    <h4>Aké sú vaše otváracie hodiny?</h4>
    <p>{{ contactInfo.openDays }}: {{ contactInfo.openHours }}</p>

    <h4>Ako vás môžem kontaktovať?</h4>
    <p>
      📧 {{ contactInfo.email }} <br />
      📞 {{ contactInfo.phone }}
    </p>

    <button class="back" @click="$router.back()">← Skryť časté otázky</button>
  </section>
</template>

<script>
export default {
  name: 'AboutFaq',
  inject: ['contactInfo']
}
</script>

<style>
.faq {
  max-width: 800px;
  margin: 0 auto;
}

.faq h2 {
  color: #4CAF50;
  font-size: 2rem;
  margin-top: 2rem;
}

/* otázky */
.faq h4 {
  color: #4CAF50;
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.4rem;
}

/* odpovede */
.faq p {
  margin-left: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
}

/* tlačidlo späť */
.back {
  margin-top: 3rem;
  background: none;
  border: none;
  padding: 0;

  color: #4CAF50;
  font-size: 1rem;
  cursor: pointer;
}

.back:hover {
  text-decoration: underline;
}

</style>
