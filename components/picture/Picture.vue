<template>
  <section class="picture">
    <nuxt-img :src="image.url" quality="1" :alt="image.alt" />
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