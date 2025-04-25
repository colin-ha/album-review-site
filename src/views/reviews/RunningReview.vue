<script setup lang="ts">
import GradientBackground from '@/components/GradientBackground.vue'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

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

function setHighlightedTrack(id: number) {
  tracks.value = tracks.value.map((track) => ({ ...track, highlighted: track.id === id }))
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function onScroll() {
  const centerY = window.innerHeight / 2
  const elements = document.querySelectorAll<HTMLElement>('.song-name[data-track-id]')
  let closestId: number | null = null
  let closestDistance = 999999

  elements.forEach((item) => {
    const rect = item.getBoundingClientRect() // shout out to https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
    const distance = Math.abs(rect.top + rect.height / 2 - centerY) // distance formula, and absolute value
    //https://www.w3schools.com/tags/att_global_data.asp
    const id = parseInt(item.dataset.trackId || '') // the id comes as a string from the object dataset

    if (distance < closestDistance) {
      closestDistance = distance
      closestId = id
    }
  })

  if (closestId !== null) {
    if (closestDistance < 200) {
      setHighlightedTrack(closestId)
    } else {
      setHighlightedTrack(-1)
    }
  }
}
</script>

<template>
  <GradientBackground>
    <div tabindex="0" class="glass backButton">
      <button @click="goBack">Back to All Albums</button>
    </div>

    <main>
      <div class="double-display">
        <div class="leftside">
          <section class="glass info">
            <div class="album-info">
              <img src="/covers/running.jpg" class="album-art" alt="Cover art for Running" />
              <div class="info-text">
                <h1>Running</h1>
                <h2>Cafuné</h2>
                <h3>2022</h3>
                <p>
                  In their debut album, pop duo <i>Cafuné</i> packs in catchy tunes and powerful
                  lyrics on this self-produced masterpiece. The instrumentals continue to evolve
                  into new styles, and their sound continues to change throughout the album. Becuase
                  of this, every song is uniquely personal and well put-together. A great listen I'd
                  recommend to most music tastes.
                </p>
              </div>
            </div>
          </section>
          <section class="review glass">
            <h1>Cafuné's "Running" - An Adventure through Love, Longing, and Memory</h1>
            <p>
              <i>Running</i> sounds just like its name. It constantly moves, it grows, and develops,
              and never seems to stay in one place for too long. Every song seems to sound similar,
              but also so new and unique every time. Across the nine tracks, pop duo Sedona Schat
              and Noah Yoo have masterfully crafted this record. The production value is there, and
              this makes sense. The two studied together at NYU’s music school. They even got
              personal feedback from legend Pharell Williams (<a
                href="https://youtu.be/G0u7lXy7pDg?si=QKPj5X9ILOtHY6Xd&t=421"
                target="_blank"
                >watch here!</a
              >). This album is their perfect debut, and feels so relatable, even after many
              relistens.
            </p>
            <p>
              The opening track,
              <span
                :data-track-id="tracks[0].id"
                class="song-name"
                :class="{ highlighted: tracks[0].highlighted }"
                >Reconsider</span
              >
              sets the tone perfectly. The chorus is so catchy, and the lyrics seem to be very
              meaningful all throughout. The song keeps evolving between verses, by adding an
              electric guitar, or a synth in the background. The melody keeps rolling, and Sedona’s
              vocal inflections are masterful. There are little drum break interjections every now
              and then that pull the track along as it goes. “We wish you the best, might as well”
              sets the mood for this album, heartbreak, longing, loving, and leaving.
            </p>
            <p>
              Reconsider feels reflective, but
              <span
                :data-track-id="tracks[6].id"
                class="song-name"
                :class="{ highlighted: tracks[6].highlighted }"
                >Live It Back Down</span
              >
              feels almost apocalyptic. “Hold on, the world is ending”. This song clearly metaphors
              the ending of some relationship, and the fallout from it. Reconsider seems to be
              further along, past this frenzy of emotions, and into acceptance. The vocal stacking
              fills your ears, and the background melodies are so intriguing. It’s upbeat, but even
              that kind of shifts away as the song moves on. “Save our souls” sets up a fantastic
              bridge. As Pharell Williams said while giving the duo direct advice, “bridges are like
              everything to me”, and the bridge makes this song. Pauses in the guitar, drums, and
              chords emphasize the vocals here, and the backing vocals pick up for one last chorus.
            </p>
            <p>
              Even further back in the emotional journey is
              <span
                :data-track-id="tracks[2].id"
                class="song-name"
                :class="{ highlighted: tracks[2].highlighted }"
                >Talk</span
              >, my favorite on the album.
              <span
                :data-track-id="tracks[2].id"
                class="song-name"
                :class="{ highlighted: tracks[2].highlighted }"
                >Talk</span
              >
              starts so calm, with the enchanting guitar loop that stays for the entire song. The
              vocals are spinning around your ears spatially, and multiple vocal lines stack over
              one another. The production is mirroring its lyrics about a storm. It’s so airy, and
              the spinning around your head feels like you’re really living this. I like to think of
              this song as Sedona overthinking some situation, and the thoughts keep conflicting
              with each other and looping around in her head. Every now and then, the spiral stops,
              and you hear “The flooded block, when I went to find someone to talk to”. The second
              verse into the second chorus has the drums pick up, and it feels more lucid at this
              point. “Disaster Strikes” is the direct connection to this swirling storm in her mind.
              This feels like the focal point in the album, but you never hear any anger in her
              voice.
            </p>
            <p>
              For the anger, you’ll have to hear
              <span
                :data-track-id="tracks[1].id"
                class="song-name"
                :class="{ highlighted: tracks[1].highlighted }"
                >Tek It</span
              >. This is by far the most popular song on the album, and the one that launched the
              duo to their popularity. Its fame isn’t a mystery, it’s really catchy and well put
              together. This song seems to express the outrage at some event, and potentially the
              falling apart of the relationship. Sedona seems to be going off on someone, launching
              complaints and outcries at them. But of course, this is juxtaposed in the chorus. “I
              watch the moon, can’t stop thinking of you”, demonstrates how hard it is to get
              someone out of your head. But at the same time, she says “so long nice to know you,
              I’ll be moving on”. This song summarizes the whole emotional journey of the album.
            </p>
            <p>
              The second song from <i>Cafuné</i> I ever got into was
              <span
                :data-track-id="tracks[4].id"
                class="song-name"
                :class="{ highlighted: tracks[4].highlighted }"
                >High</span
              >, and it’s easy to see why. It’s a change up from the love game, and more a new
              perspective on life. It just seems like she’s talking about her general mental state,
              of both euphoria and feeling broken. She’s not sure who to turn to, or where she’s at
              right now. “The closest I could do” is a great addition to the end here, and it sets
              up another masterful bridge. <i>Cafuné</i> is just unpredictable enough in every song
              that everything sounds new and great, and this song is a prime example.
            </p>
            <p>
              <span
                :data-track-id="tracks[3].id"
                class="song-name"
                :class="{ highlighted: tracks[3].highlighted }"
                >Everyone Knows</span
              >
              feels very vindictive again, in the best way. It’s the only song on the album with a
              heavy and noticeable amount of autotune, which gives it a unique style. “Do you want
              to go a martyr?” is a very powerful line and shows her emotional turmoil right up
              until “cut me loose” cues us into the chorus. The chorus really changes style on the
              album, where it feels almost like just yelling at someone. The intro is synthy and
              loopy, and it really sets up the new style this song has, both lyrically and
              auditorily.
            </p>
            <p>
              The inner turmoil continues in
              <span
                :data-track-id="tracks[5].id"
                class="song-name"
                :class="{ highlighted: tracks[5].highlighted }"
                >Want Me Out</span
              >. It opens with a low-pass filter pulling up into the main song, much like
              Reconsider, and the chorus moves into very high falsetto notes. This song feels
              weightless, and it floats. It feels wistful and emotionally leaves the track in a
              tricky place. The song holds these dream and sleep metaphors. Sedona feels like
              everything has just been a dream, and the person she is feeling close to literally
              “wants her out”. This song is a testimony to that sadness she feels from no longer
              being wanted.
            </p>
            <p>
              <span
                :data-track-id="tracks[7].id"
                class="song-name"
                :class="{ highlighted: tracks[7].highlighted }"
                >Empty Tricks</span
              >
              has a wildly different feel to the rest of the album. It’s loaded with autotune and
              feels warped and intense. The guitar is the main driving force for the beginning of
              the song. The vocals are spacy, and feels almost like an interlude, but at track
              number 8, it’s clear it’s tying a bow on the album. At 1:00, the drums pick way up,
              into what sounds almost like Breakcore. The line “I’m trying” really sticks.
            </p>
            <p>
              The final track on the album is aptly called
              <span
                :data-track-id="tracks[8].id"
                class="song-name"
                :class="{ highlighted: tracks[8].highlighted }"
                >Running</span
              >. I never really resonated too much with this song. It’s very slow and feels like
              storytelling, but to me, that’s out of place on this album. Musically, it’s another
              change of pace. The singing is essentially a whisper. The guitar is great, and the
              background vocals ramp up as the song progresses, but it doesn’t pick up nearly as
              much as the other tracks. Despite this, it does put a close on a great album. You’re
              kind of left wandering by the end here. This album ends as it was, floating.
            </p>
            <hr />
            <p>
              <i>Running</i> is such a ballad for wild thoughts. It takes the listener through a
              jumbled story of emotions, mostly focused on love. It’s hard to stay still with this
              album, and it mirrors her spinning thinking. The production value is incredible, and
              the duo’s talent is very apparent. It’s clear that they have what it takes, and I
              can’t wait to see what they’ll come up with next.
            </p>
          </section>
        </div>

        <section class="glass tracklist">
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
        </section>
      </div>
    </main>
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

  .leftside {
    flex: 0 1 auto;
    width: 95%;
  }
}

.song-name {
  font-weight: bold;
  transition: all 0.2s ease;
}

.highlighted {
  font-weight: bold;
  color: #6c5ce7;
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
