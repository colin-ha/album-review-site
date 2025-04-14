<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  album: {
    id: string
    title: string
    artist: string
    year: number
    coverPath: string
  }
}>()

const router = useRouter()

const isExpanded = ref(false)

const handleMouseEnter = () => {
  isExpanded.value = true
}

const handleMouseLeave = () => {
  isExpanded.value = false
}

const navigate = () => {
  const valid = ['running', 'floramaniia', 'submarine', 'beatopia']
  if(valid.includes(props.album.id)){
    router.push(`/album/${props.album.id}`)
  }
  else{
    router.push('/notwritten')
  }
}
</script>

<template>
  <div
    class="album-card"
    :class="{ expanded: isExpanded, glass: isExpanded }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="navigate"
  >
    <div class="album-cover">
      <img :src="album.coverPath" :alt="album.title" />
    </div>
    <div class="album-info">
      <h3>{{ album.title }}</h3>
      <p class="artist">{{ album.artist }}</p>
      <p class="year">{{ album.year }}</p>
    </div>
  </div>
</template>

<style scoped>
.album-card {
  cursor: pointer; /* makes it look clickable */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  height: auto;
  max-width: 350px;
}

.album-card.expanded {
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.album-cover {
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.album-cover img {
  width: 100%;
  border-radius: 12px;
  transition: all 0.5s ease-in-out;
}

.album-info {
  max-height: 0;
  opacity: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

.album-card.expanded .album-info {
  max-height: 200px;
  opacity: 1;
  padding: 1.5rem;
}

.album-info h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.artist {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.year {
  font-size: 0.9rem;
}
</style>
