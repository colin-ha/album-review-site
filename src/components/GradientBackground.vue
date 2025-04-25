<template>
  <div class="gradient-background" @mousemove="handleMouseMove">
    <!-- Background gradient layer -->
    <div class="gradient-layer" :style="gradientStyle"></div>

    <!-- Page content goes in the slot -->
    <div class="gradient-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mouseX = ref(50)
const mouseY = ref(50)
const prefersReducedMotion = ref(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

// when the mouse moves,  update the location and make it percentage
const handleMouseMove = (event: MouseEvent) => {
  if (!prefersReducedMotion.value) {
    mouseX.value = (event.clientX / window.innerWidth) * 100
    mouseY.value = (event.clientY / window.innerHeight) * 100
  }
}

// if they have prefers reduced motion on we hide this
// I guess it might change, so we should account for that with a listener
const handleReducedMotionChange = (event: MediaQueryListEvent) => {
  prefersReducedMotion.value = event.matches
}

// has to have a global listener to make sure it works anywhere
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.addEventListener('change', handleReducedMotionChange)
})

// remove when unmounted
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.removeEventListener('change', handleReducedMotionChange)
})

// style just updates one of the gradients with this value
// got from https://csshero.org/mesher/
const gradientStyle = computed(() => {
  const gradients = [
    // turn off the actual moving one if they have prefers reduced motion
    !prefersReducedMotion.value
      ? `radial-gradient(at ${mouseX.value}% ${mouseY.value}%, hsla(168,100%,36%,1) 0px, transparent 50%)`
      : '',
    // the rest doesn't change
    `radial-gradient(at 47% 0%, hsla(330,78%,58%,1) 0px, transparent 50%)`,
    `radial-gradient(at 73% 28%, hsla(246,74%,63%,1) 0px, transparent 50%)`,
    `radial-gradient(at 43% 46%, hsla(359,66%,51%,1) 0px, transparent 50%)`,
    `radial-gradient(at 64% 81%, hsla(0,70%,46%,1) 0px, transparent 50%)`,
    `radial-gradient(at 16% 71%, hsla(308,86%,72%,1) 0px, transparent 50%)`,
    `radial-gradient(at 91% 71%, hsla(300,79%,40%,1) 0px, transparent 50%)`,
    `radial-gradient(at 7% 18%, hsla(231,75%,73%,1) 0px, transparent 50%)`,
  ].join(',')

  return {
    backgroundColor: '#99ccff',
    backgroundImage: gradients,
  }
})
</script>

<style scoped>
.gradient-background {
  position: relative;
  width: 99vw;
  min-height: 100vh;
  overflow: hidden;
  /* This lets it fill the entire background
  Kinda hacky though with 99vw but otherwise it was adding a horizontal scrollbar*/
}

.gradient-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  /* Make it a proper background and stay filling the entire screen and location*/
}
</style>
