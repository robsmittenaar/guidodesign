export const state = () => ({
  menu: [],
  footer: [],
  options: [],
});

export const actions = {
  setMenu({ commit }, data) {
    commit('SET_MENU', data);
  },

  setFooter({ commit }, data) {
    commit('SET_FOOTER', data);
  },

  setOptions({ commit }, data) {
    commit('SET_OPTIONS', data);
  },
};

export const mutations = {
  SET_MENU(state, val) {
    state.menu = val;
  },

  SET_FOOTER(state, val) {
    state.footer = val;
  },

  SET_OPTIONS(state, val) {
    state.options = val;
  },
};
