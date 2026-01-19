<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  provide() {
    return {
      contactInfo: {
        email: 'info@milesforsmiles.sk',
        phone: '+421 900 123 456',
        address: 'Dobrovoľnícka 12, 811 09 Bratislava',
        pickupPlace: 'Dobrovoľnícka 12, Bratislava',
        pickupHours: 'Po–Pi: 10:00 – 18:00'
      }
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
