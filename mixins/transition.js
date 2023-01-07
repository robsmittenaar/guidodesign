import { gsap } from 'gsap';

export default {
  transition: {
    name: 'Default',
    mode: 'out-in',
    css: false,

    enter() {
      this.$nuxt.$emit('loader:leave');
    },

    leave(el, done) {
      this.$nuxt.$emit('loader:enter');

      setTimeout(() => {
        gsap.set(el, { autoAlpha: 0 });

        done();
      }, 2000);
    },
  },
};
