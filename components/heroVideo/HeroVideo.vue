<template>
  <section class="hero-video" />
</template>

<script>
export default {
  name: 'HeroVideoComponent',

  props: {
    video: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HeroVideo';
</style>