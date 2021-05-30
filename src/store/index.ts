import { createStore } from "vuex";

export interface State {
  messages: { timestamp: string; message: string }[];
}

export default createStore<State>({
  state: {
    messages: [],
  },
  mutations: {
    addMessage(state, data: { timestamp: string; message: string }) {
      state.messages.push(data);
    },
  },
  actions: {
    receiveMessage({ commit }, data: { timestamp: string; message: string }) {
      commit("addMessage", data);
    },
  },
  getters: {
    messages: (state) => {
      return state.messages;
    },
  },
  modules: {},
});
