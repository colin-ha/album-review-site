<script setup lang="ts">
import GradientBackground from '@/components/GradientBackground.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack(){
  router.push('/')
}
</script>

<template>
  <GradientBackground>
  <div class="glass" id="notWrittenBubble">
    <h1>Not Written Yet</h1>
    <p>I haven't written this review yet. Try again another day!</p>

    <button @click="goBack">Back to All Albums</button>
  </div>
  </GradientBackground>
</template>

<style scoped>

#notWrittenBubble{
  width: 50vw;
  margin: 1rem auto;
  padding: 20px;
  text-align: center;
}

button{
  font-size: x-large;
  background-color: #0984e3;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 25px;
  margin-top: 10px;
  transition: all 0.2s ease;
  cursor: pointer;
}
button:hover{
  background-color: #6c5ce7;
}
</style>
