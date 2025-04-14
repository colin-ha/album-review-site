<script setup lang="ts">
import GradientBackground from '@/components/GradientBackground.vue'
import AlbumCard from '@/components/AlbumCard.vue'
import { ref } from 'vue'

// Sample album data - in a real app, this might come from an API or store
const albums = ref([
  {
    id: 'running',
    title: 'Running',
    artist: 'Cafuné',
    year: 2021,
    coverPath: 'covers/running.jpg',
  },

  {
    id: 'floramaniia',
    title: 'Flora Maniia',
    artist: 'Temachii',
    year: 2023,
    coverPath: 'covers/flora-maniia.jpg',
  },
  {
    id: 'beatopia',
    title: 'Beatopia',
    artist: 'Beabadoobee',
    year: 2022,
    coverPath: 'covers/beatopia.webp',
  },
  {
    id: 'submarine',
    title: 'Submarine',
    artist: 'The Marías',
    year: 2024,
    coverPath: 'covers/submarine.jpg',
  },
  {
    id: 'dieformybitch',
    title: 'Die For My Bitch',
    artist: 'Baby Keem',
    year: 2019,
    coverPath: 'covers/dieformybitch.png',
  },

  {
    id: 'fablesfromamayfly',
    title: 'Fables From A Mayfly: What I Tell You Three Times is True',
    artist: 'Fair To Midland',
    year: 2007,
    coverPath: 'covers/fablesfromamayfly.jpg',
  },
  {
    id: 'thefamemonster',
    title: 'The Fame Monster',
    artist: 'Lady Gaga',
    year: 2009,
    coverPath: 'covers/thefamemonster.jpg',
  },
  {
    id: 'afever',
    title: "A Fever You Can't Sweat Out",
    artist: 'Panic! At The Disco',
    year: 2005,
    coverPath: 'covers/afever.jpg',
  },

  {
    id: 'lir2',
    title: 'Luv is Rage 2',
    artist: 'Lil Uzi Vert',
    year: 2017,
    coverPath: 'covers/lir2.png',
  },

  {
    id: 'sweetboy',
    title: 'Sweet Boy',
    artist: 'Malcolm Todd',
    year: 2024,
    coverPath: 'covers/sweetboy.jpg',
  },

  {
    id: 'tw2052',
    title: 'TW2052',
    artist: 'KayCyy',
    year: 2023,
    coverPath: 'covers/tw2052.png',
  },

  {
    id: 'oceaneyes',
    title: 'Ocean Eyes',
    artist: 'Owl City',
    year: 2009,
    coverPath: 'covers/oceaneyes.jpg',
  },
])
</script>

<template>
  <GradientBackground>
    <main>
      <div class="glass topInfo">
        <h1>Album Reviews</h1>
        <p>
          These are some of my favorite albums of all time, and how each song made me feel. I love
          sharing my favorite songs with others, and I hope you'll enjoy these as much as I did!
        </p>
      </div>

      <div class="album-grid">
        <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
      </div>
    </main>
  </GradientBackground>
</template>

<style>
.topInfo {
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  max-width: 90vw;
  text-align: center;
}

h1 {
  font-weight: bolder;
  font-size: 32pt;
}

.album-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  margin: 3rem auto 15rem;
  padding: 0 2rem;
  max-width: 90vw;
}

@media (max-width: 750px) {
  .album-grid {
    gap: 1.5rem;
  }
}
</style>
