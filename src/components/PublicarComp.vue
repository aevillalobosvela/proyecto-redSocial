<template>
  <div class="card border p-3" style="background-color: rgba(255, 255, 255, 0.726);">
    <h2 class="display-6">Crear publicacion</h2>
    <div class="card-body pb-0">
      <form @submit.prevent="publicar">
        <div class="card border">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img
                  v-if="usuario.datos.imagenurl"
                  class="m-2 img-fluid"
                  style="border-radius: 15%"
                  :src="usuario.datos.imagenurl"
                  alt="User Image"
                  width="100%"
                  height="100%"
                />
                <img
                  v-else
                  class="m-2 img-fluid"
                  style="border-radius: 15%"
                  src="../assets/avatar.png"
                  alt="User Image"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-5 mt-2">
                <h5 style="margin: 0px">{{ usuario.datos.username }}</h5>
                <p style="margin: 0px">
                  <small>Justo ahora</small>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="card-body pe-0">
                <p class="i">¿En que estas pensando...?</p>
                <div class="input-group" style="height: 230px">
                  <textarea
                    required
                    v-model="contenido"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card-body p-0">
                <p class="i mt-3">Subir imagen</p>
                <div class="mt-1 text-center">
                  <input
                    v-if="imageUrl == null"
                    type="file"
                    class="form-control"
                    id="inputpubli"
                    style="width: 83%"
                    @change="onFileChange"
                    accept="image/*"
                  />
                </div>
                <div>
                  <img
                    v-if="imageUrl"
                    :src="imageUrl"
                    alt="Image preview"
                    style="width: 83%"
                  />
                </div>
                <div v-if="imageUrl" class="mt-2">
                  <button
                    style="width: 83%"
                    @click="clearFile"
                    class="rounded w-20"
                  >
                    Eliminar
                  </button>
                </div>
                <div class="mt-2">
                  <button style="width: 83%" type="submit" class="rounded w-20">
                    Publicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
  computed: {
    ...mapState(["usuario"]),
  },
  data() {
    return {
      contenido: null,
      fec_pub: null,
      imageUrl: null,
      imagenpubli: null,
    };
  },
  methods: {
    ...mapActions(["recuperarmisPubs"]),

    onFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.imageUrl = URL.createObjectURL(file);
        this.imagenpubli = event.target.files[0];
      } else {
        this.imageUrl = null;
        alert("Please select an image file.");
      }
    },

    clearFile() {
      this.imageUrl = null;
      this.imagenpubli = null;
    },

    obtenerFechaHoraActual() {
      const ahora = new Date();

      const año = ahora.getFullYear();
      const mes = String(ahora.getMonth() + 1).padStart(2, "0"); // getMonth() devuelve 0-11
      const dia = String(ahora.getDate()).padStart(2, "0");
      const horas = String(ahora.getHours()).padStart(2, "0");
      const minutos = String(ahora.getMinutes()).padStart(2, "0");
      const segundos = String(ahora.getSeconds()).padStart(2, "0");

      this.fec_pub = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    },

    async publicar() {
      try {
        await this.$services.auth.publicar({
          contenido: this.contenido,
          likes: 0,
          fec_pub: this.fec_pub,
          imagenpubli: this.imagenpubli,
          id: this.usuario.datos.id,
        });
        Swal.fire({
          title: "¡Genial!",
          text: "Publicado correctamente :)",
          icon: "success",
        });
        this.recuperarmisPubs();
        this.$router.push("/publicaciones");
      } catch (error) {
        Swal.fire({
          title: "Lo siento :(",
          text: "Error en la publicacion",
          icon: "warning",
        });
      }
    },
  },
  mounted() {
    this.obtenerFechaHoraActual();
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
  color: rgba(95, 37, 150);
  transition: 0.5s;
  width: 100%;
  margin: 0px;
}
.custom-link:hover {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
h5 {
  margin: 15px;
}
p {
  margin-bottom: 3px;
}
button {
  background-color: #fff;
  border: 1px solid rgba(95, 37, 150);
  font-size: 17px;
  border-radius: 0.4em;
  transition: 0.5s;
  width: 150px;
}

button:hover {
  background-color: rgba(95, 37, 150);
}
</style>
