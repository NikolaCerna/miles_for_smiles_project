<template>
  <div class="faq-item">
    <h4 @click="open = !open">{{ question }}</h4>
    <p v-if="open"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    question: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style>
    h4 {
  color: #4CAF50;
  cursor: pointer;
  margin-bottom: 0.3rem;
  transition: color 0.2s ease;
}

h4:hover {
  color: #43a047;
}
</style>