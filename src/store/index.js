import { createStore } from "vuex";
import services from "../services";

export default createStore({
  state: {
    users: [],
    usuario: null,
    publicaciones: [],
    usersconpub: [],
    mispubs: [],
    count_pubs: 0,
    likes_user: 0,
    likes_in_pub: [],
  },
  getters: {
  },
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
    setUsers(state, userData) {
      state.users = userData.datos;
    },
    setPubs(state, userData) {
      state.publicaciones = userData.datos;
    },
    setmisPubs(state, userData) {
      state.mispubs = userData.datos;
      state.count_pubs = userData.datos.length;
    },
    setUsersconPub(state, userData) {
      state.usersconpub = userData.datos;
    },
    setlikesinPubs(state, userData) {
      state.likes_in_pub = userData.datos;
    },
    setmislikes(state, userData) {
      state.likes_user = userData.datos;
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
    async fetchUsers({ commit }) {
      try {
        const response = await services.auth.getAllUsers();
        commit("setUsers", response.data);
      } catch (error) {
        console.error("Fetch users error:", error);
        throw error;
      }
    },
    async recuperarPubs({ commit }) {
      try {
        const response = await services.auth.recuperarPubs();
        commit("setPubs", response.data);
      } catch (error) {
        console.error("Fetch publicaciones error:", error);
        throw error;
      }
    },
    async recuperarUsersconPub({ commit }) {
      try {
        const response = await services.auth.recuperarUsersconPub();
        commit("setUsersconPub", response.data);
      } catch (error) {
        console.error("Fetch publicaciones usuario error:", error);
        throw error;
      }
    },
    async recuperarmisPubs({ commit }) {
      try {
        const response = await services.auth.recuperarmisPubs({
          id: this.state.usuario.datos.id,
        });
        commit("setmisPubs", response.data);
      } catch (error) {
        console.error("Fetch publicaciones error:", error);
        throw error;
      }
    },
    async recuperarlikesinPubs({ commit }) {
      try {
        const response = await services.auth.recuperarlikes({
          id: this.state.usuario.datos.id,
        });
        commit("setlikesinPubs", response.data);
      } catch (error) {
        console.error("Fetch likes error:", error);
        throw error;
      }
    },
    async recuperarmislikes({ commit }) {
      try {
        const response = await services.auth.recuperarmislikes({
          id: this.state.usuario.datos.id,
        });
        commit("setmislikes", response.data);
      } catch (error) {
        console.error("Fetch likes error:", error);
        throw error;
      }
    },
  },
});
