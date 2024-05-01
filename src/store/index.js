import { createStore } from "vuex";
import Swal from "sweetalert2";

export default createStore({
  state: {
    users: [],
  },
  getters: {},
  mutations: {
    registerUser(state, newUser) {
      state.users.push(newUser);
    },
  },
  actions: {
    registerUser({ commit, state }, newUser) {
      const existingUser = state.users.find(
        (user) => user.username === newUser.username
      );
      const nopass = newUser.password !== newUser.reppassword;
      console.log(nopass);
      if (existingUser) {
        Swal.fire({
          title: "Que mal :(",
          text: "El nombre de usuario ya está en uso",
          icon: "warning",
        });
        return;
      }

      if (nopass) {
        Swal.fire({
          title: "Lo siento :(",
          text: "Las contraseñas no coinciden",
          icon: "warning",
        });
        return;
      }

      commit("registerUser", newUser);
      Swal.fire({
        title: "¡Genial!",
        text: "Usuario registrado correctamente",
        icon: "success",
      });
    },
    async loginUser({ state }, credentials) {
      // Buscar el usuario en el array
      const user = state.users.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );
      return new Promise((resolve) => {
        if (user) {
          Swal.fire({
            title: "¡Genial!",
            text: "Bienvenido usuario",
            icon: "success",
          });
          resolve(true); 
        } else {
          Swal.fire({
            title: "Que mal :(",
            text: "Nombre de usuario o contraseña incorrectos",
            icon: "error",
          });
          resolve(false); 
        }
      });
    },
  },
  modules: {},
});
