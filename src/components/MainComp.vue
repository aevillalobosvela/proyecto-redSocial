<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-lg-3 mb-3 col-sm-12">
        <div
          class="card border p-2"
          style="background-color: rgba(255, 255, 255, 0.87)"
        >
          <div class="card-header">
            <h2 style="font-size: 20px;" class="display-6">Usuarios</h2>
          </div>
          <div class="card-body" style="max-height: 445px; overflow-y: auto">
            <div v-for="(user, index) in users" :key="index">
              <div @click="verusuario(user)" class="row border mb-3">
                <div class="col-4">
                  <img
                    v-if="user.imagenurl"
                    class="m-2 img-fluid"
                    style="border-radius: 50%; border: solid 1px"
                    :src="user.imagenurl"
                    alt="User Image"
                    width="60"
                    height="60"
                  />
                  <img
                    v-else
                    class="m-2 img-fluid"
                    style="border-radius: 50%; border: solid 1px"
                    src="../assets/avatar.png"
                    alt="User Image"
                    width="60"
                    height="60"
                  />
                </div>
                <div class="col-8 mt-3">
                  <h5 style="margin: 0px">{{ user.username }}</h5>
                  <p style="margin: 0px">
                    <small>{{ user.nombre }} {{ user.apellido }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-12 mb-2">
        <router-view></router-view>
      </div>

      <div class="col-lg-3 col-sm-12">
        <div
          class="card border"
          style="background-color: rgba(255, 255, 255, 0.726)"
        >
          <div class="card-header text-center">
            <h2 style="font-size: 25px;" class="display-6">Mi perfil</h2>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                v-if="usuario.datos.imagenurl"
                class="m-3 img-fluid"
                style="border-radius: 15%"
                :src="usuario.datos.imagenurl"
                alt="User Image"
                width="180"
                height="180"
              />
              <img
                v-else
                class="m-2 img-fluid"
                style="border-radius: 15%"
                src="../assets/avatar.png"
                alt="User Image"
                width="180"
                height="180"
              />
              <h5>{{ usuario.datos.nombre }} {{ usuario.datos.apellido }}</h5>
              <h5>
                <em>{{ usuario.datos.username }}</em>
              </h5>
            </div>
            <p><em>Publicaciones:</em> {{ count_pubs }}</p>
            <p><em>Likes en mis publicaciones:</em> {{ likes_user }}</p>
          </div>
          <div class="text-center mb-3">
            <a class="btn btn-light border">
              <i class="fa fa-door-open fa-lg"></i
              ><router-link to="/" class="custom-link"
                >Cerrar sesion</router-link
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["usuario", "users", "count_pubs", "likes_user"]),
  },
  data() {
    return {
      mis_likes: 0,
      mis_pubs: 0,
      imagenperfil: null,
    };
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapActions(["recuperarmisPubs"]),
    verusuario(user) {
      const userData = {
        nombre: user.nombre,
        apellido: user.apellido,
        username: user.username,
        fecnac: user.fecnac,
        imagenurl: user.imagenurl,
      };
      this.$store.commit("setverusuario", userData);
      this.$router.push("/verusuario");
    },
  },
  mounted() {
    this.fetchUsers();
    this.recuperarmisPubs();
    this.imagenperfil = this.usuario.datos.imagenurl;
  },
};
</script>

<style scoped>
.thum {
  transition: 0.3s;
}
.thum:hover {
  color: var(--sec-color);
}
.custom-link {
  text-decoration: none;
  margin-left: 15px;
  color: black;
}
h5 {
  margin: 15px;
}
p {
  margin-bottom: 3px;
}
</style>
