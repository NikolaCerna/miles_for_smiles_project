<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-col">
        <h4>Miles for Smiles</h4>
        <p>© 2026 Miles for Smiles</p>
        <p>Charitatívny beh pre dobrú vec</p>
      </div>
      <div class="footer-col">
        <h4>Kontakt</h4>
        <p>📍 {{ contactInfo.address }}</p>
        <p>📧 {{ contactInfo.email }}</p>
        <p>📞 {{ contactInfo.phone }}</p>
      </div>
      <div class="footer-col">
        <h4>Otváracie hodiny</h4>
        <p>{{ contactInfo.openDays }}:</p>
        <p>{{ contactInfo.openHours }}</p>
        <p>Sobota - Nedeľa: zatvorené</p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
  inject: ['contactInfo']
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2.5rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h4 {
  margin-bottom: 0.7rem;
  color: #4CAF50;
}

.footer-col p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
