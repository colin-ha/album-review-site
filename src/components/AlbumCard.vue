<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
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
const shouldAutoExpand = ref(false)
const isFocused = ref(false)

const handleMouseEnter = () => {
  isExpanded.value = true
}

const handleMouseLeave = () => {
  isExpanded.value = false
}

const navigate = () => {
  const valid = ['running'] // when i write more reviews, they get added here
  if (valid.includes(props.album.id)) {
    router.push(`/album/${props.album.id}`)
  } else {
    router.push('/notwritten')
  }
}

// should we keep things expanded or not
const checkAutoExpand = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  shouldAutoExpand.value = window.innerWidth < 750 || prefersReducedMotion
}

// this part is for the expansion functionality, this should stay expanded in the
// cases of screen being too wide or if prefers-reduced-motion is on reduce
onMounted(() => {
  checkAutoExpand()
  window.addEventListener('resize', checkAutoExpand)

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotionQuery.addEventListener('change', checkAutoExpand)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkAutoExpand)

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotionQuery.removeEventListener('change', checkAutoExpand)
})
</script>

<template>

  <!--    https://stackoverflow.com/questions/41601294/vue-js-value-tied-on-input-having-the-focus  -->
  <div
    class="album-card"
    :class="{ expanded: (isExpanded || shouldAutoExpand || isFocused), glass: (isExpanded || shouldAutoExpand || isFocused) }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="navigate"
    @keydown.enter="navigate"
    @focus="isFocused = true"
    @blur="isFocused = false"
    tabindex="0"
  >
    <div class="album-cover">
      <img :src="album.coverPath" :alt="'Cover art for' + album.title" />
    </div>
    <div class="album-info">
      <h2>{{ album.title }}</h2>
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
  max-width: 350px;
}

.album-card.expanded {
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
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

.album-info h2 {
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

@media (max-width: 1500px) {
  .album-card {
    margin-bottom: 40px;
  }
}
</style>
