<template>
  <div class="page about">

    <h1>O projekte</h1>

    <!-- ÚVODNÝ OBRÁZOK -->
    <img
      src="/about-hero.jpg"
      alt="Beh ako symbol pohybu a zmyslu"
      class="about-image hero"
    />

    <p class="intro">
      Miles for Smiles je študentský projekt zameraný na podporu
      charitatívnych behov a pohybu ako nástroja pomoci.
      Myšlienkou projektu je spojiť fyzickú aktivitu
      s pozitívnym spoločenským dopadom.
    </p>

    <!-- CIEĽ PROJEKTU -->
    <h2>Cieľ projektu</h2>

    <p>
      Cieľom projektu je motivovať ľudí k pohybu a zároveň
      ukázať, že aj malé aktivity, ako jeden odbehnutý kilometer,
      môžu mať zmysel a reálny dopad.
    </p>

    <img
      src="/about-community.jpg"
      alt="Komunita a pomoc druhým"
      class="about-image"
    />

    <p>
      Projekt zdôrazňuje myšlienku, že pomoc nemusí byť veľká,
      aby bola dôležitá. Každý kilometer predstavuje symbolickú
      podporu pre tých, ktorí to najviac potrebujú.
    </p>

  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  line-height: 1.7;
}

/* obrázky */
.about-image {
  width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
  object-fit: cover;
}

/* hlavný obrázok */
.about-image.hero {
  max-height: 380px;
}

/* menší obrázok */
.about-image.small {
  max-height: 250px;
}

/* úvodný text */
.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
</style>
