export default {
  transition: {
    name: 'Default',
    mode: 'out-in',
    css: false,

    enter() {},

    leave(el, done) {
      done();
    },
  },
};
