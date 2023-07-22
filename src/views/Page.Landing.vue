<script setup>
import Custombutton from '@/components/Custombutton.vue';
import CustomInput from '@/components/CustomInput.vue';
</script>

<template>
  <div class="section-hero bg-img-center">
    <div class="section-container section-hero-content">
      <h1>Unlimited movies, TV shows, and more</h1>
      <p class="mt-4">Watch anywhere. Cancel anytime.</p>
      <p class="mt-6">Ready to watch? Enter your email to create or restart your membership.</p>
      <CustomInput class="mt-4" label="Email address" type="email" />
      <Custombutton class="mt-4">Get Started</Custombutton>
    </div>
  </div>

  <div class="section-others">
    <div class="section-container">
      <h2>Enjoy on your TV</h2>
      <div class="flex flex-col">
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        <div class="tv-container">
          <img src="@/assets/imgs/netflix-tv.png" class="tv-img" />
          <video
            class="tv-video"
            data-uia="nmhp-card-animation-asset-video"
            autoplay=""
            playsinline=""
            muted=""
            loop=""
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>

  <div class="section-others">
    <div class="section-container">
      <h2>Download your shows to watch offline</h2>
      <p>Save your favorites easily and always have something to watch.</p>
    </div>
  </div>

  <div class="section-others">
    <div class="section-container">
      <h2>Create profiles for kids</h2>
      <p>
        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
      </p>
    </div>
  </div>
</template>

<style scoped>
.section-container {
  max-width: calc(100% - 3rem);
  margin: auto;
}

.section-hero {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),
    url('@/assets/imgs/netflix-bg-hero.png');
  display: flex;
  min-height: 30rem;
  padding: 7.5rem 0 2rem;

  @media screen and (min-width: 600px) {
    min-height: 32rem;
    padding: 8.5rem 0 3rem;
  }

  @media screen and (min-width: 960px) {
    min-height: 43.75rem;
    padding: 9.875rem 0 4rem;
  }
  .section-hero-content {
    text-align: center;
  }
}

.section-others {
  background-color: var(--color-secondary);
  text-align: center;
  padding: 3.5rem 0;

  @media screen and (min-width: 600px) {
    padding: 4.5rem 0;
  }
}

.tv-container {
  display: flex;
  justify-content: center;
  position: relative;
  .tv-img {
    z-index: 10;
  }
  .tv-video {
    position: absolute;
    top: 21%;
    left: 13.2%;
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54.5%;

    video {
      object-fit: contain;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  }
}
</style>
