<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-5 mb-4 col-sm-12 mb-lg-0">
        <div class="card mt-5 mb-3">
          <div class="row">
            <div
              class="col-md-4 gradient-custom text-center text-white"
              style="
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
              "
            >
              <img
                v-if="usuario.datos.imagenurl"
                class="img-fluid my-5"
                style="border-radius: 15%; width: 170px"
                :src="usuario.datos.imagenurl"
                alt="User Image"
              />
              <img
                v-else
                class="img-fluid my-5"
                style="border-radius: 15%; width: 170px"
                src="../assets/avatar.png"
                alt="User Image"
              />
              <h5>{{ usuario.datos.nombre }} {{ usuario.datos.apellido }}</h5>
              <p>{{ usuario.datos.username }}</p>
              <router-link to="/modperfil">
                <i class="gho fa-solid fa-edit fa-3x text-white"></i>
              </router-link>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Informacion</h6>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Nombre(s)</h6>
                    <p class="text-muted">{{ usuario.datos.nombre }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Apellidos</h6>
                    <p class="text-muted">{{ usuario.datos.apellido }}</p>
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Usuario</h6>
                    <p class="text-muted">{{ usuario.datos.username }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Fec. de nacimiento</h6>
                    <p class="text-muted">
                      {{ formatDate(usuario.datos.fecnac) }}
                    </p>
                  </div>
                </div>
                <h6>Interaccion</h6>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Publicaciones</h6>
                    <p class="text-muted">{{ count_pubs }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Likes</h6>
                    <p class="text-muted">{{ likes_user }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7 col-sm-12 mt-3 mb-2">
        <div class="card border p-3" style="background-color: rgba(255, 255, 255, 0.726);">
          <h2 class="display-6">Mis publicaciones</h2>
          <div class="card-body" style="max-height: 420px; overflow-y: auto">
            <div v-for="(publicacion, indexp) in mispubs" :key="indexp">
              <div class="card border mb-4">
                <div class="card-header">
                  <div class="row">
                    <div class="col-2">
                      <img
                        v-if="publicacion.imagenurl"
                        class="m-2 img-fluid"
                        style="
                          border-radius: 15%;
                          border: solid 1px;
                          border-color: rgb(206, 158, 186);
                        "
                        :src="publicacion.imagenurl"
                        alt="User Image"
                        width="100%"
                        height="100%"
                      />
                      <img
                        v-else
                        class="m-2 img-fluid"
                        style="
                          border-radius: 15%;
                          border: solid 1px;
                          border-color: rgb(206, 158, 186);
                        "
                        src="../assets/avatar.png"
                        alt="User Image"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div class="col-4 mt-3">
                      <h5 style="margin: 0px">{{ publicacion.username }}</h5>
                      <p style="margin: 0px">
                        <small
                          >Hace
                          {{ tiempoTranscurrido(publicacion.fec_pub) }}</small
                        >
                      </p>
                    </div>
                    <div
                      style="display: flex; justify-content: end"
                      class="mt-3 col-6 text-end"
                    >
                      <p
                        style="
                          font-size: 25px;
                          margin-right: 10px;
                          margin-top: 8px;
                          margin-bottom: 0px;
                        "
                      >
                        {{ publicacion.likes }}
                      </p>
                      <i class="mt-2 fa fa-thumbs-up fa-2x"></i>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="text-center mb-1">
                    <img
                      v-if="publicacion.imagenurlpub"
                      class="text-center"
                      :src="publicacion.imagenurlpub"
                      alt="User Image"
                      width="50%"
                      height="50%"
                    />
                  </div>

                  <p>
                    {{ publicacion.contenido }}
                  </p>
                </div>
                <div class="card-footer">
                  <form @submit.prevent="eliminar(publicacion.cod_pub)">
                    <div class="row text-center">
                      <div class="col-12">
                        <button type="submit" class="btn btn-danger btn-sm">
                          Eliminar publicacion
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      num: 2,
    };
  },
  methods: {
    ...mapActions(["recuperarmisPubs"]),

    tiempoTranscurrido(desdeFecha) {
      const fechaInicial = new Date(desdeFecha);
      const ahora = new Date();
      const diferencia = ahora - fechaInicial;

      const segundosTotales = Math.floor(diferencia / 1000);
      const minutosTotales = Math.floor(segundosTotales / 60);
      const horasTotales = Math.floor(minutosTotales / 60);
      const diasTotales = Math.floor(horasTotales / 24);
      const semanasTotales = Math.floor(diasTotales / 7);
      const mesesTotales = Math.floor(diasTotales / 30);
      const añosTotales = Math.floor(diasTotales / 365);

      if (minutosTotales < 60) {
        return `${minutosTotales} minutos`;
      } else if (horasTotales < 24) {
        return `${horasTotales} horas`;
      } else if (diasTotales < 7) {
        return `${diasTotales} días`;
      } else if (semanasTotales < 4) {
        return `${semanasTotales} semanas`;
      } else if (mesesTotales < 12) {
        return `${mesesTotales} meses`;
      } else {
        return `${añosTotales} años`;
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    async eliminar(pub_id) {
      const result = await Swal.fire({
        title: "Estas seguro?",
        text: "Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      });

      if (result.isConfirmed) {
        try {
          await this.$services.auth.eliminarPub({
            cod_pub: pub_id,
          });
          this.recuperarmisPubs();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  computed: {
    ...mapState(["usuario", "mispubs", "count_pubs", "likes_user"]),
  },
};
</script>

<style>
.thum {
  transition: 0.3s;
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
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );
}
</style>
