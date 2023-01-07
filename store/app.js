// export const state = () => ({
//   windowSize: {
//     width: 0,
//     height: 0,
//   },
//   theme: 'dark',
//   menuOpen: false,
// });

// export const actions = {
//   setWindowSize({ commit, dispatch }, size) {
//     commit('SET_WINDOW_SIZE', size);
//   },

//   setTheme({ commit }, theme) {
//     commit('SET_THEME', theme);
//   },

//   toggleMenuOpen({ commit }, bool) {
//     commit('TOGGLE_MENU_OPEN', bool);
//   },
// };

// export const mutations = {
//   SET_WINDOW_SIZE(state) {
//     if (process.client) {
//       state.windowSize = {
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     }
//   },

//   SET_THEME(state, val) {
//     state.theme = val;
//   },

//   TOGGLE_MENU_OPEN(state, payload) {
//     state.menuOpen = payload || !state.menuOpen;
//   }
// };
