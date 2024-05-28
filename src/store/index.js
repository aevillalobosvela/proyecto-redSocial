import { createStore } from "vuex";
import usuarios from '../usuarios.js';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    users: usuarios,
    usuario: null,
  },
  getters: {},
  mutations: {
    registerUser(state, newUser) {
      state.users.push(newUser);
    },
    setUserData(state, userData) {
      state.usuario = userData;
    },
    clearUser(state) {
      state.usuario = null;
    },
  },
  actions: {
    registerUser({ commit, state }, newUser) {
      const existingUser = state.users.find(
        (user) => user.username === newUser.username
      );
      const nopass = newUser.password !== newUser.reppassword;
      if (existingUser) {
        return "El nombre de usuario ya está en uso";
      } else if (nopass) {
        return "Las contraseñas no coinciden";
      } else {
        commit("registerUser", newUser);
        console.log(state.users);
        return "exito";
      }
    },
  },
  plugins: [createPersistedState()],
});
