<template>
  <div class="progress-wrapper">
    <div class="progress-info">
      <span>{{ current }} km</span>
      <span>{{ goal }} km</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    current: {
      type: Number,
      required: true
    },
    goal: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      const percentage = (this.current / this.goal) * 100
      return percentage > 100 ? 100 : percentage
    }
  }
}
</script>

<style scoped>
.progress-wrapper {
  max-width: 400px;
  margin: 1rem 0;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.progress-bar {
  height: 10px;
  background-color: #eee;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease;
}
</style>
