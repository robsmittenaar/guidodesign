import Banner from '~/components/banner/Banner';

export default {
  components: {
    Banner,
  },

  computed: {
    components() {
      const data = this.page || this.post;
      return data?.acf?.components || [];
    }
  }
};
