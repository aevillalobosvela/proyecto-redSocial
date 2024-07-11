<template>
  <div class="card border p-3">
    <h2 class="display-6">Publicaciones</h2>
    <div class="card-body" style="max-height: 420px; overflow-y: auto">
      <div v-for="(publicacion, indexp) in usersconpub" :key="indexp">
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
                    >Hace {{ tiempoTranscurrido(publicacion.fec_pub) }}</small
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

                <i
                  v-if="comprobar_like(publicacion.cod_pub)"
                  class="mt-2 thum fa fa-thumbs-up fa-2x"
                  style="color: rgb(230, 155, 240)"
                  v-on:click="quitarlike(publicacion.cod_pub)"
                ></i>

                <i
                  v-else
                  class="mt-2 thum fa fa-thumbs-up fa-2x"
                  v-on:click="darlike(publicacion.cod_pub)"
                ></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              {{ publicacion.contenido }}
            </p>
          </div>
          <ul
            class="list-group list-group-flush"
            style="max-height: 120px; overflow-y: auto"
          >
            <li
              class="list-group-item"
              v-for="(comentario, index) in comentarios[publicacion.cod_pub] ||
              []"
              :key="index"
            >
              <div class="row mb-2 p-0">
                <div class="col-1 p-0">
                  <img
                    v-if="rutaImagen(comentario)"
                    class="p-0"
                    style="
                      margin: 0px;
                      margin-left: 4px;
                      border-radius: 15%;
                      border: solid 1px;
                      border-color: rgb(206, 158, 186);
                    "
                    :src="rutaImagen(comentario)"
                    alt="User Image"
                    width="100%"
                    height="45px"
                  />
                  <img
                    v-else
                    class="img-fluid"
                    style="
                      border-radius: 15%;
                      margin-left: 4px;
                      border: solid 1px;
                      border-color: rgb(206, 158, 186);
                      padding: 2px;
                    "
                    src="../assets/avatar.png"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="col-11">
                  <div style="display: flex; align-items: center">
                    <h5 style="margin: 0; margin-right: 5px; font-size: 17px">
                      {{ comentario.username }}
                    </h5>
                    <h5 style="margin: 0; font-size: 10px">
                      Hace
                      {{ tiempoTranscurrido(comentario.fec_com) }}
                    </h5>
                  </div>

                  <div class="container border rounded">
                    {{ comentario.contenido_com }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="card-footer">
            <form @submit.prevent="comentar(publicacion.cod_pub)">
              <div class="row">
                <div class="col-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Escribe un comentario..."
                    :id="'comentario-' + publicacion.cod_pub"
                    autocomplete="off"
                  />
                </div>
                <div class="col-2" style="display: flex; justify-content: end">
                  <button type="submit" class="btn btn-warning btn-sm">
                    Comentar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { reactive, toRefs } from "vue";
import Swal from "sweetalert2";

function obtenerFechaHoraActual() {
  const ahora = new Date();

  const año = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, "0"); // getMonth() devuelve 0-11
  const dia = String(ahora.getDate()).padStart(2, "0");
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
}

export default {
  computed: {
    ...mapState(["usuario", "publicaciones", "usersconpub", "likes_in_pub"]),
    ...mapGetters(["userImagesPub"]),
  },
  data() {
    return {
      com_publi: null,
      publicacionComentada: null,
      fec_com: null,
      img_comentarios: null,
    };
  },
  setup() {
    const state = reactive({
      comentarios: {},
    });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    ...mapActions(["recuperarPubs"]),
    ...mapActions(["recuperarUsersconPub"]),
    ...mapActions(["recuperarlikesinPubs"]),
    ...mapActions(["recuperarmislikes"]),

    rutaImagen(usuario) {
      if (usuario.imagenurl == null) {
        return null;
      } else {
        return usuario.imagenurl;
      }
    },

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

    async recuperarComs(codigo_pub) {
      try {
        const response = await this.$services.auth.recuperarComs({
          cod_pub: codigo_pub,
        });

        if (response.data && response.data.datos) {
          this.comentarios[codigo_pub] = response.data.datos;
        }
      } catch (error) {
        console.error(
          "Error fetching comments for publication",
          codigo_pub,
          ":",
          error
        );
      }
    },

    async fetchAllComments() {
      for (const pub of this.publicaciones) {
        await this.recuperarComs(pub.cod_pub);
      }
    },

    async comentar(cont) {
      const textoid = "comentario-" + cont;
      const texto = document.getElementById(textoid).value;
      try {
        if (texto == null) {
          Swal.fire({
            title: "No",
            text: "Comenta algo antes",
            icon: "warning",
          });
          return null;
        }
        await this.$services.auth.comentar({
          contenido_com: texto,
          fec_com: obtenerFechaHoraActual(),
          cod_pub: cont,
          id: this.usuario.datos.id,
        });

        this.fetchAllComments();
        document.getElementById(textoid).value = "";
      } catch (error) {
        console.log(error);
      }
    },

    async darlike(cod_pub) {
      try {
        await this.$services.auth.darlike({
          id: this.usuario.datos.id,
          cod_pub: cod_pub,
        });
        this.recuperarUsersconPub();
        this.recuperarlikesinPubs();
        this.recuperarmislikes();
      } catch (error) {
        console.log(error);
      }
    },

    async quitarlike(cod_pub) {
      try {
        await this.$services.auth.quitarlike({
          id: this.usuario.datos.id,
          cod_pub: cod_pub,
        });
        this.recuperarUsersconPub();
        this.recuperarlikesinPubs();
        this.recuperarmislikes();
      } catch (error) {
        console.log(error);
      }
    },

    comprobar_like(codpub) {
      for (const reg of this.likes_in_pub) {
        if (codpub == reg.cod_pub) return true;
      }
      return false;
    },
  },

  async mounted() {
    await this.recuperarPubs();
    this.fetchAllComments();
    this.recuperarUsersconPub();
    this.recuperarlikesinPubs();
    this.recuperarmislikes();
  },
};
</script>

<style>
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
