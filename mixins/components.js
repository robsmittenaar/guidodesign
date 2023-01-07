import HeroVideo from '~/components/heroVideo/HeroVideo';

export default {
  components: {
    HeroVideo,
  },

  computed: {
    components() {
      const data = this.page || this.post;
      return data?.acf?.components || [];
    }
  }
};
