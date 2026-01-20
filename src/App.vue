<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'

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
        phone: '+421 900 123 457',
        address: 'Dobrovoľnícka 12, 811 09 Bratislava',
        pickupPlace: 'Dobrovoľnícka 12, Bratislava',
        openDays: 'Po-Pi',
        openHours: '10:00 - 19:00'
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
