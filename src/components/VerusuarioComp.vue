<template>
  <div class="container-fluid">
    <div class="row" style="margin-left: 30%; margin-right: 30%">
      <div class="card mt-5 mb-3">
        <div class="row">
          <div class="card-header text-center mt-1">
            <p>Perfil de usuario</p>
            <img
              v-if="verusuario.imagenurl"
              class="img-fluid mb-1"
              style="width: 170px; border: solid rgb(70, 70, 70) 2px"
              :src="verusuario.imagenurl"
              alt="User Image"
            />
            <img
              v-else
              class="img-fluid mb-1"
              style="border-radius: 15%; width: 170px"
              src="../assets/avatar.png"
              alt="User Image"
            />
          </div>
          <div class="card-body p-4 mx-4">
            <div class="row">
              <div class="col col-5 text-start">
                <div class="row">
                  <h4>Nombre:</h4>
                </div>
                <div class="row">
                  <h4>Usuario:</h4>
                </div>
                <div class="row">
                  <h4>Fec. Nac.:</h4>
                </div>
              </div>
              <div class="col col-7 text-end">
                <div class="row">
                  <h4 class="text-muted">
                    {{ verusuario.nombre }} {{ verusuario.apellido }}
                  </h4>
                </div>
                <div class="row">
                  <h4 class="text-muted">{{ verusuario.username }}</h4>
                </div>
                <div class="row">
                  <h4 class="text-muted">
                    {{ formatDate(verusuario.fecnac) }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-center mx-auto">
            <a
              class="btn btn-lg btn-warning"
              style="
                display: flex;
                align-items: center;
                margin-left: 25%;
                margin-right: 25%;
              "
              @click="regresar"
            >
              <i class="fa fa-person-through-window fa-2x mx-2"></i> Regresar a
              inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      num: 2,
    };
  },
  methods: {
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

    regresar() {
      this.$router.push("/publicaciones");
    },
  },
  computed: {
    ...mapState(["verusuario"]),
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
