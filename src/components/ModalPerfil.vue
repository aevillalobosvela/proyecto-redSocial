<template>
  <div class="container">
    <div class="row">
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
            <h3>Realiza cambios en la informacion de tu perfil</h3>
            <div class="m-4">
              <button class="btn btn-danger" style="width: 50%">
                <router-link to="/perfil">
                  <p style="color: rgb(41, 40, 40)">Regresar a mi perfil</p>
                </router-link>
              </button>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body p-4">
              <h6>Mi informacion</h6>
              <hr class="mt-0 mb-4" />
              <form @submit.prevent="modificar">
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="nombre" class="form-label">Nombre(s)</label>
                    <input
                      type="text"
                      v-model="nombre"
                      class="form-control"
                      id="nombre"
                      @input="nomcomp"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="apellido" class="form-label">Apellidos</label>
                    <input
                      type="text"
                      v-model="apellido"
                      class="form-control"
                      id="apellido"
                      @input="apecomp"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="user" class="form-label">Usuario</label>
                    <input
                      type="text"
                      v-model="username"
                      class="form-control"
                      id="user"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="nac" class="form-label"
                      >Fecha de nacimiento</label
                    >
                    <input
                      type="date"
                      v-model="fecnac"
                      class="form-control"
                      id="fecnac"
                      required
                    />
                  </div>
                  <div class="row mb-3">
                    <div class="col-12">
                      <label for="image" class="form-label"
                        >Foto de perfil</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        @change="onFileChange"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <h6>Ingresa tu password para verificar la accion</h6>
                <hr class="mt-3 mb-3" />
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>

                  <div class="col-6 mb-3">
                    <label for="reppassword" class="form-label"
                      >Repetir Password</label
                    >
                    <input
                      type="password"
                      v-model="reppassword"
                      class="form-control"
                      id="reppassword"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="text-center mt-3">
                    <button style="width: 25%" type="submit">
                      Registrar cambios
                    </button>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="text-end">
                  <router-link to="/modpassword">
                    <p style="margin-bottom: 0px; color: rgb(41, 40, 40)">
                      Cambiar password
                    </p>
                  </router-link>
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
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      username: "",
      fecnac: "",
      password: "",
      reppassword: "",
      imagen: null,
    };
  },
  methods: {
    ...mapActions(["recuperarmisPubs"]),

    cargar() {
      this.nombre = this.usuario.datos.nombre;
      this.apellido = this.usuario.datos.apellido;
      this.username = this.usuario.datos.username;
      const date = new Date(this.usuario.datos.fecnac);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      this.fecnac = `${year}-${month}-${day}`;
    },

    nomcomp() {
      this.nombre = this.nombre.replace(/[^a-zA-Z]/g, "");
    },

    apecomp() {
      this.apellido = this.apellido.replace(/[^a-zA-Z]/g, "");
    },

    async modificar() {
      if (this.password != this.reppassword) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Las contraseñas no coinciden",
          icon: "error",
        });
        return;
      }
      var hashedText = CryptoJS.SHA256(this.password).toString(
        CryptoJS.enc.Hex
      );
      if (hashedText != this.usuario.datos.password) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Contraseña incorrecta",
          icon: "error",
        });
        return;
      }
      var respuesta = "";
      try {
        respuesta = await this.$services.auth.modificarUsuario({
          id: this.usuario.datos.id,
          nombre: this.nombre,
          apellido: this.apellido,
          username: this.username,
          fecnac: this.fecnac,
          imagenperfil: this.imagen,
        });
        if (respuesta.success === 1) {
          Swal.fire({
            title: "¡Genial!",
            text: "Usuario modificado correctamente",
            icon: "success",
          });
          const response = await this.$services.auth.login({
            username: this.username,
            password: this.password,
          });
          this.$store.commit("setUserData", response.data);
          this.$router.push("/perfil");
        } else {
          Swal.fire({
            title: "Lo siento :(",
            text: "Hubo un error en la modificacion",
            icon: "warning",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Lo siento :(",
          text: "Error en la modificacion",
          icon: "warning",
        });
      }
    },

    onFileChange(event) {
      this.imagen = event.target.files[0];
    },
  },
  computed: {
    ...mapState(["usuario"]),
  },
  mounted() {
    this.cargar();
  },
};
</script>

<style scoped>
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
button {
  background-color: #fff;
  border: 1px solid rgba(95, 37, 150);
  height: 2em;
  font-size: 17px;
  border-radius: 0.4em;
  transition: 0.5s;
  padding: 0px;
}

button:hover {
  background-color: rgb(170, 126, 211);
}

.button2:hover {
  background-color: rgba(135, 107, 160, 0.712);
}
</style>
