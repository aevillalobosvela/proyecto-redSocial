import { createStore } from "vuex";
import usuarios from '../usuarios.js';
export default createStore({
  state: {
    users: usuarios,
    usuario: "",
  },
  getters: {},
  mutations: {
    registerUser(state, newUser) {
      state.users.push(newUser);
    },
    ingresoUser(state, newUser) {
      state.usuario = newUser;
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

    async loginUser({ commit, state }, credentials) {
      const user = state.users.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );
      return new Promise((resolve) => {
        if (user) {
          commit("ingresoUser", user);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
  },
  modules: {},
});
