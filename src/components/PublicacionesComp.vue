<template>
  <div class="card border p-3">
    <h2 class="display-6">Publicaciones</h2>
    <div class="card-body" style="max-height: 420px; overflow-y: auto">
      <div v-for="(publicacion, indexp) in data_usuarios" :key="indexp">
        <div class="card border mb-4">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img
                  v-if="userImagesPub[indexp]"
                  class="m-2 img-fluid"
                  style="border-radius: 15%; border: solid 1px"
                  :src="userImagesPub[indexp]"
                  alt="User Image"
                  width="100%"
                  height="100%"
                />
                <img
                  v-else
                  class="img-fluid m-2"
                  style="border-radius: 15%; border: solid 1px"
                  src="../assets/avatar.png"
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
                <i class="mt-2 thum fa fa-thumbs-up fa-2x"></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              {{ publicacion.contenido }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(comentario, index) in comentarios[publicacion.cod_pub] ||
              []"
              :key="index"
            >
              <div class="row mb-2">
                <div class="col-1">
                  <i class="mt-1 fas fa-user fa-lg"></i>
                </div>
                <div class="col-11">
                  <p style="margin: 0; font-size: 10px">
                    Hace
                    {{ tiempoTranscurrido(comentario.fec_com) }}
                  </p>
                  <div class="container border rounded">
                    {{ comentario.contenido_com }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="card-footer">
            <form @submit.prevent="comentar">
              <div class="row">
                <div class="col-10">
                  <input
                    type="text"
                    class="form-control"
                    id="comment"
                    placeholder="Escribe un comentario..."
                    v-model="com_publi[publicacion.cod_pub]"
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

function findUniqueElement(array) {
  // Iterar sobre el array para encontrar el primer elemento con datos
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== undefined &&
      array[i] !== null &&
      array[i] !== "" &&
      array[i] !== false &&
      array[i] !== 0 &&
      !Number.isNaN(array[i])
    ) {
      // Si se encuentra un elemento con datos, devolver su contenido y su índice
      return { contenido: array[i], indice: i };
    }
  }

  // Si no se encuentra ningún elemento con datos, devolver null
  console.error("esta vacio.");
  return null;
}

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
    ...mapState(["usuario", "publicaciones", "usersconpub"]),
    ...mapGetters(["userImagesPub"]),
  },
  data() {
    return {
      com_publi: [],
      publicacionComentada: null,
      fec_com: null,
      data_usuarios: null,
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

    async comentar() {
      try {
        var res = findUniqueElement(this.com_publi);
        if (res == null) {
          Swal.fire({
            title: "No",
            text: "Comenta algo antes",
            icon: "warning",
          });
          return null;
        }
        const response = await this.$services.auth.comentar({
          contenido_com: res.contenido,
          fec_com: obtenerFechaHoraActual(),
          cod_pub: res.indice,
          id: this.usuario.datos.id,
        });
        console.log(response.data);
        this.fetchAllComments();
        this.com_publi = [];
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    await this.recuperarPubs();
    await this.fetchAllComments();
    await this.recuperarUsersconPub();
    this.data_usuarios = this.usersconpub;
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
