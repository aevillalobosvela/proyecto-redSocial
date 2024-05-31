<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-lg-3 mb-3 col-sm-12">
        <div class="card border p-2">
          <div class="card-header">
            <h2 class="display-6">Usuarios</h2>
          </div>
          <div class="card-body" style="max-height: 420px; overflow-y: auto">
            <div v-for="(user, index) in users" :key="index">
              <div class="row border mb-3">
                <div class="col-4">
                  <img
                    v-if="userImages[index]"
                    class="img-fluid m-2"
                    style="border-radius: 50%; border: solid 1px"
                    :src="userImages[index]"
                    width="60"
                    height="60"
                    alt="Imagen de perfil del usuario"
                  />
                  <img
                    v-else
                    class="img-fluid m-2"
                    style="border-radius: 50%; border: solid 1px"
                    src="../assets/avatar.png"
                    width="60"
                    height="60"
                    alt="Imagen de perfil del usuario"
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
        <div class="card border">
          <div class="card-header text-center">
            <h2 class="display-6">Mi perfil</h2>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                v-if="userImage"
                class="m-2 img-fluid"
                style="border-radius: 15%"
                :src="userImage"
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
            <p><em>Publicaciones:</em> 15</p>
            <p><em>Contactos:</em> 15</p>
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
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["usuario", "users"]),
    ...mapGetters(["userImage", "userImages"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  mounted() {
    this.fetchUsers(); // Obtener los usuarios cuando el componente se monta
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
