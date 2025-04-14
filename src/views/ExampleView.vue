<template>
  <gradient-background>
    <div class="content">
      <!-- Your page content goes here -->
      <h1>Your Page Title</h1>
      <p>This content sits on top of the interactive gradient background</p>
    </div>
  </gradient-background>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackground from '@/components/GradientBackground.vue'

export default defineComponent({
  name: 'ExampleView',
  components: {
    GradientBackground,
  },
})
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}
</style>
