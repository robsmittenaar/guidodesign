<template>
  <section class="hero-video">
    <video autoplay muted playsinline loop class="video">
      <source :src="video.url" type="video/mp4">
    </video>
  </section>
</template>

<script>
export default {
  name: 'HeroVideoComponent',

  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HeroVideo';
</style>