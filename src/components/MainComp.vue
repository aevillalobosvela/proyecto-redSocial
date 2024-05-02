<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-lg-3 mb-3 col-sm-12">
        <div class="card border p-2">
          <div class="card-header">
            <h2 class="display-6">Usuarios</h2>
          </div>
          <div class="card-body" style="max-height: 435px; overflow-y: auto">
            <div v-for="(user, index) in users" :key="index">
              <div class="row border  mb-3">
                <div class="col-4">
                  <img
                    class="img-fluid m-2 "
                    style="border-radius: 50%"
                    :src="user.imagen"
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
                class="m-2 img-fluid"
                style="border-radius: 15%"
                :src="usuario.imagen"
                width="180"
                height="180"
                alt="Imagen de perfil del usuario"
              />
              <h5>{{ usuario.nombre }} {{ usuario.apellido }}</h5>
              <h5>
                <em>{{ usuario.username }}</em>
              </h5>
            </div>
            <p><em>Publicaciones:</em> 15</p>
            <p><em>Contactos:</em> 15</p>
          </div>
          <div class="text-center mb-3">
            <a class="btn btn-light border">
              <i class="fa fa-door-open fa-lg"></i
              ><router-link to="/main" class="custom-link"
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["usuario", "users"]),
  },
  data() {
    return {};
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
