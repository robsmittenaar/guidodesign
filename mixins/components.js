import HeroVideo from '~/components/heroVideo/HeroVideo';
import Picture from '~/components/picture/Picture';

export default {
  components: {
    HeroVideo,
    Picture
  },

  computed: {
    components() {
      const data = this.page || this.post;
      return data?.acf?.components || [];
    }
  }
};
