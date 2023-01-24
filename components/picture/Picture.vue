<template>
  <section class="picture">
    <pre>{{ image.alt }}</pre>
    <nuxt-picture :src="image.url" quality="80" :alt="image.alt" />
  </section>
</template>

<script>
export default {
  name: 'PictureComponent',

  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Picture';
</style>