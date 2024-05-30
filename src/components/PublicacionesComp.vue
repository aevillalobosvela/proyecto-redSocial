<template>
  <div class="card border p-3">
    <h2 class="display-6">Publicaciones</h2>
    <div class="card-body" style="max-height: 420px; overflow-y: auto">
      <div v-for="(publicacion, index) in publicaciones" :key="index">
        <div class="card border mb-4">
          <div class="card-header">
            <div class="row">
              <div class="col-1">
                <i class="mt-2 me-3 fas fa-user fa-2x"></i>
              </div>
              <div class="col-5">
                <h5 style="margin: 0px">Usuario</h5>
                <p style="margin: 0px">
                  <small
                    >Hace {{ tiempoTranscurrido(publicacion.fec_pub) }}</small
                  >
                </p>
              </div>
              <div
                style="display: flex; justify-content: end"
                class="col-6 text-end"
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
            <li class="list-group-item">
              <div class="row mb-2">
                <div class="col-1">
                  <i class="mt-1 fas fa-user fa-lg"></i>
                </div>
                <div class="col-11">
                  <div class="container border rounded">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio cum accusantium modi placeat.
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-1">
                  <i class="mt-1 fas fa-user fa-lg"></i>
                </div>
                <div class="col-11">
                  <div class="container border rounded">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio cum accusantium modi placeat.
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="card-footer">
            <input
              type="text"
              class="form-control"
              id="comment"
              placeholder="Escribe un comentario..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["publicaciones"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["recuperarPubs"]),

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
  },
  mounted() {
    this.recuperarPubs(); 
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
