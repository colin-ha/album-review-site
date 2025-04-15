<script setup lang="ts">
import GradientBackground from '@/components/GradientBackground.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

function goBack() {
  router.push('/')
}

const tracks = ref([
  { id: 1, title: 'Reconsider', duration: '3:28', highlighted: false },
  { id: 2, title: 'Tek It', duration: '3:12', highlighted: false },
  { id: 3, title: 'Talk', duration: '3:02', highlighted: true },
  { id: 4, title: 'Everyone Knows', duration: '3:34', highlighted: false },
  { id: 5, title: 'High', duration: '3:37', highlighted: false },
  { id: 6, title: 'Want Me Out', duration: '4:17', highlighted: false },
  { id: 7, title: 'Live It Back Down', duration: '3:09', highlighted: false },
  { id: 8, title: 'Empty Tricks', duration: '3:32', highlighted: false },
  { id: 9, title: 'Running', duration: '3:43', highlighted: false },
])
//
// function setHighlightedTrack(id: number) {
//   tracks.value = tracks.value.map(track =>
//     ({ ...track, highlighted: track.id === id })
//   )
// }
</script>

<template>
  <GradientBackground>
    <div class="glass backButton">
      <button @click="goBack">Back to All Albums</button>
    </div>

    <div class="double-display">
      <div class="glass info">
        <div class="album-info">
          <img src="/covers/running.jpg" class="album-art" />
          <div class="info-text">
            <h1>Running</h1>
            <h2>Cafuné</h2>
            <h3>2022</h3>
            <p>
              In their debut album, pop duo Cafuné packs in catchy tunes and powerful lyrics on this
              self-produced masterpiece. The instrumentals continue to evolve into new styles, and
              their sound continues to change throughout the album. Becuase of this, every song is
              uniquely personal and well put-together.
            </p>
          </div>
        </div>
      </div>

      <div class="glass tracklist">
        <h1>Tracklist</h1>
        <div class="tracks-container">
          <div
            v-for="track in tracks"
            :key="track.id"
            class="track"
            :class="{ 'track-highlighted': track.highlighted }"
          >
            <div class="track-number">{{ track.id }}</div>
            <div class="track-title">{{ track.title }}</div>
            <div class="track-duration">{{ track.duration }}</div>
          </div>
        </div>
      </div>
    </div>
  </GradientBackground>
</template>

<style scoped>
button {
  font-size: x-large;
  background-color: #0984e3;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 25px;
  transition: all 0.2s ease;
  cursor: pointer;
}

button:hover {
  background-color: #6c5ce7;
}

.backButton {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 5px;
  width: 256px;
  z-index: 999;
}

.info {
  margin: 20px;
  padding: 20px;
  flex: 0 1 auto;
}

.info h1 {
  font-size: xxx-large;
}

.info h2 {
  font-size: xx-large;
}

.info h2 {
  font-size: x-large;
}

.album-art {
  width: 20vw;
  border-radius: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.album-info {
  display: flex;
}

.info-text {
  margin-left: 40px;
}

.double-display {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}

.tracklist {
  margin: 20px;
  padding: 20px;
  flex: 1 0 auto;
  min-width: 400px;
}

.tracks-container {
  margin-top: 20px;
}

.track {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.track:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.track-highlighted {
  background: rgba(108, 92, 231, 0.4);
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
}

.track-number {
  width: 30px;
  font-weight: bold;
  opacity: 0.8;
}

.track-title {
  flex-grow: 1;
  font-size: 1.1rem;
}

.track-duration {
  opacity: 0.7;
}
</style>
