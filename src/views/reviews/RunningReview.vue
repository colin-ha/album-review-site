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
      <div class="leftside">
        <div class="glass info">
          <div class="album-info">
            <img src="/covers/running.jpg" class="album-art" />
            <div class="info-text">
              <h1>Running</h1>
              <h2>Cafuné</h2>
              <h3>2022</h3>
              <p>
                In their debut album, pop duo Cafuné packs in catchy tunes and powerful lyrics on
                this self-produced masterpiece. The instrumentals continue to evolve into new
                styles, and their sound continues to change throughout the album. Becuase of this,
                every song is uniquely personal and well put-together. A great listen I'd recommend
                to most music tastes.
              </p>
            </div>
          </div>
        </div>
        <div class="review glass">
          <h1>Cafuné's "Running" - An Adventure through Love, Longing, and Memory</h1>
          <p>
            Cafuné’s <em>Running</em> feels like an album written at the cusp of something—whether
            it’s a relationship on the verge of collapse, a self-reckoning in the dead of night, or
            the subtle unraveling of youthful certainty. Across nine tracks, the duo crafts an
            immersive sonic tapestry filled with spacious guitar textures, hypnotic vocals, and
            introspective lyricism. It’s a record you don’t just hear—you <em>float</em> through it.
          </p>
          <p>
            From the opening track, the album establishes a tone that’s as much emotional as it is
            musical.
            <span class="song-name" :class="{ highlighted: tracks[0].highlighted }"
              >Reconsider</span
            >
            is an early standout and easily one of Cafuné’s finest compositions. The track begins
            with a slow burn, its melody rolling smoothly as Sedona Schat’s vocals build in both
            vulnerability and confidence. The chorus—anchored by the bittersweet line, “wish you the
            best, might as well”—carries a deep emotional resonance. As the song evolves, the
            instrumentation blooms: scattered drum fills and an electric guitar solo sneak in,
            creating a sense of forward motion that feels both cathartic and resigned. It’s a song
            about retrospection, yet it never gets stuck in the past.
          </p>
          <p>
            But if Reconsider is reflective,
            <span class="song-name" :class="{ highlighted: tracks[6].highlighted }"
              >Live It Back Down</span
            >
            is defiant. The track begins upbeat—almost misleadingly so—but gradually peels back its
            layers to reveal a more complex emotional core. Like Everyone Knows, another
            emotionally-charged standout, it walks the tightrope between anger and restraint. You
            can feel the frustration bubbling just under the surface, especially in lines like “save
            our souls” and “cut me loose.” Yet, Sedona never lets the emotion overwhelm her
            delivery; her voice remains steady, allowing the tension to smolder instead of erupt.
          </p>
          <p>
            Then comes
            <span class="song-name" :class="{ highlighted: tracks[1].highlighted }">Tek It</span>,
            the clear centerpiece of the album and Cafuné’s signature track. Its popularity is no
            mystery—the chorus is sticky in the best way, with a rhythmic hook that loops in your
            brain long after the song ends. The brilliance of Tek It lies not just in its
            catchiness, but in how the second verse builds so naturally into that chorus, creating a
            momentum that’s both emotional and sonic. The lyrics reflect the recurring theme of love
            slipping away, of standing in the ash and wondering what still smolders.
          </p>
          <p>
            Not every track is as upfront about its message.
            <span class="song-name" :class="{ highlighted: tracks[2].highlighted }">Talk</span>, for
            instance, plays like a lucid dream. The intro guitar alone sets the stage for a song
            that feels more like a late-night monologue than a structured pop tune. It’s whispery
            and disorienting—in the best way. The few decipherable lyrics feel like fleeting
            thoughts inside Sedona’s head, looping and twisting as they fight for clarity. The
            moment she softly sings “disaster strikes,” it conjures not destruction, but an internal
            storm—a beautiful, swirling chaos that only makes sense when you’re caught inside it.
          </p>
          <p>
            That sense of inner turmoil continues in
            <span class="song-name" :class="{ highlighted: tracks[5].highlighted }"
              >Want Me Out</span
            >, a track that stands out for its elegant simplicity. It opens with a low-pass filter,
            as if the song is peeking in from another room, and the chorus glides into falsetto
            notes that feel almost weightless. The titular line, delivered with a poignant
            inflection, becomes the emotional crux of the track. The metaphor of dreams and sleep
            stretches throughout the song, making it feel like a goodbye whispered through a
            half-open window.
          </p>
          <p>
            The mood then shifts dramatically with
            <span class="song-name" :class="{ highlighted: tracks[7].highlighted }"
              >Empty Tricks</span
            >, a song that dives headfirst into experimental territory. This is where Cafuné throws
            out the rulebook—autotune stretches vocals into alien textures, and just after the
            one-minute mark, a breakcore explosion shatters the calm. It’s jarring, but in a way
            that jolts you awake. If Talk was the dream, Empty Tricks is the nightmare glitching at
            the edge of sleep. Even with its chaotic energy, one line sticks out through the haze:
            “I’m trying.” It lingers like a quiet cry buried in noise.
          </p>
          <p>
            The more grounded
            <span class="song-name" :class="{ highlighted: tracks[4].highlighted }">High</span>
            follows and provides a necessary breather. It’s a refreshing deviation from the central
            love-lost narrative, offering instead a different kind of high—perspective, perhaps, or
            elevation above past entanglements. The guitar filters are subtle but fresh, and
            Sedona’s high-register vocals here are mesmerizing. The closing line, “the closest I
            could do,” adds a twinge of melancholy to a song that otherwise feels like a moment of
            clarity. High proves that even when Cafuné takes their foot off the gas, they’re still
            moving.
          </p>
          <p>
            By the time we reach
            <span class="song-name" :class="{ highlighted: tracks[3].highlighted }"
              >Everyone Knows</span
            >, we’ve fully embraced the album’s kaleidoscope of emotional states. This track wears
            its autotune like armor, pushing the vocals into a robotic elegance that somehow
            enhances the emotional undercurrent. “Do you wanna die a martyr?” punches through the
            haze, making you pause. The layered synths and echoing production give the song a sense
            of height, as if it’s echoing through a cathedral of memory.
          </p>
          <p>
            Finally, we land on the title track,
            <span class="song-name" :class="{ highlighted: tracks[8].highlighted }">Running</span>—a
            subtle closer that trades dramatic flair for muted introspection. The warbly guitar and
            hushed vocals lean heavily into ASMR territory, and while there’s an attempt at
            narrative here, it feels slightly disjointed—perhaps intentionally so. This track
            doesn’t aim to resolve anything. Instead, it leaves you wandering, unsure if you’ve
            truly made it out the other side or if you’ve been running in circles the whole time. As
            the background vocals rise, they promise lift-off but never deliver the final push.
            You’re left floating—and maybe that’s the point.
          </p>
          <hr />
          <p>
            Running isn’t an album that shouts its brilliance. It hums it, whispers it, layers it
            beneath textures and subtext. It’s a record for the moments between—late-night drives,
            bedroom ceilings, that hour before sleep when your thoughts loop like refrains. Cafuné
            doesn’t just write songs; they write moments, and each one lives on a different
            emotional frequency. From the bombastic highs of Tek It and Live It Back Down, to the
            soft internal monologues of Talk and Want Me Out, this album invites you not just to
            listen, but to feel. And when it’s done, you’ll find yourself reaching for the
            replay—not to understand it all, but to lose yourself in it again.
          </p>
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

.leftside {
  flex: 0 1 auto;
  width: 65%;
}

.info {
  margin: 20px;
  padding: 20px;
  align-self: flex-start;
}

.review {
  margin: 20px;
  padding: 20px;
  align-self: flex-start;
}

.review p {
  margin-bottom: 20px;
  font-size: large;
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
  max-height: 20vw; /* keep it 1-1 */
}

.album-info {
  display: flex;
  align-items: flex-start;
}

.info-text {
  margin-left: 40px;
}

.double-display {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  align-items: flex-start;
}

.tracklist {
  margin: 20px;
  padding: 20px;
  flex: 1 0 auto;
  width: 30%;
  position: fixed;
  top: 100px;
  right: 5px;
  max-height: 80vh;
  overflow: auto;
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

@media (max-width: 1000px) {
  /* hide tracklist */
  .tracklist {
    display: none;
  }

  .double-display {
    flex-direction: column;
    margin-top: 60px;
  }

  .album-info {
    flex-direction: column;
  }

  .album-art {
    width: 100%;
    max-height: none;
  }

  .info-text {
    margin-left: 0;
    margin-top: 20px;
  }

  .info {
    width: 95%;
    box-sizing: border-box;
  }
}

.song-name {
  font-weight: bold;
  transition: all 0.2s ease;
}

.highlighted {
  font-weight: bold;
  color: #6c5ce7;
  text-decoration: underline;
}

.highlighted:hover {
  color: #0984e3;
  cursor: default;
}

@media (prefers-reduced-motion: reduce) {
  .highlighted {
    color: black;
  }

  .highlighted:hover {
    color: black;
    cursor: default;
  }
}
</style>
