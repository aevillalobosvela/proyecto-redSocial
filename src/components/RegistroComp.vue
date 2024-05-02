<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div style="margin-bottom: 114px" class="col-md-6 col-sm-10 mt-5">
          <div class="card border">
            <div class="card-header">
              <div class="row">
                <div class="col-2 text-center mt-3">
                  <i class="ghost fa-solid fa-ghost fa-3x"></i>
                </div>
                <div class="col-10 mt-2">
                  <p style="margin-bottom: 3px">Bienvenido nuevo usuario</p>
                  <p style="margin-bottom: 0px">¡Vamos a registrarte!</p>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="nombre" class="form-label">Nombre(s)</label>
                    <input
                      type="text"
                      v-model="nombre"
                      class="form-control"
                      id="nombre"
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
                </div>
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
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="image" class="form-label">Foto de perfil</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="handleFileUpload"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 text-end">
                    <div class="">
                      <button type="submit">Registrarse</button>
                    </div>
                    <!-- <button>
                      <router-link to="/" class="custom-link"
                        >Si, registrarme</router-link
                      >
                    </button> -->
                  </div>
                  <div class="col-6">
                    <button class="button2">
                      <router-link to="/" class="custom-link"
                        >No gracias</router-link
                      >
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <router-link to="/registro" style="color: blueviolet"
                >Politica de privacidad</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";
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
    ...mapActions(["registerUser"]),

    handleFileUpload(event) {
      const file = event.target.files[0];
      this.imagen = file;
    },
    async register() {
      const msg = await this.registerUser({
        nombre: this.nombre,
        apellido: this.apellido,
        username: this.username,
        fecnac: this.fecnac,
        password: this.password,
        reppassword: this.reppassword,
        imagen: this.imagen,
      });

      if (msg == "exito") {
        Swal.fire({
          title: "¡Genial!",
          text: "Usuario registrado correctamente",
          icon: "success",
        });
        this.$router.push("/");
      } else {
        Swal.fire({
          title: "Lo siento :(",
          text: msg,
          icon: "warning",
        });
      }

      this.nombre = "";
      this.apellido = "";
      this.username = "";
      this.fecnac = "";
      this.password = "";
      this.reppassword = "";
      this.imagen = null;
    },
  },
};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: rgba(95, 37, 150);
  transition: 0.5s;
}

.custom-link:hover {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.ghost {
  color: rgba(95, 37, 150, 0.822);
  transition: 0.5s;
}
@keyframes animacionVertical {
  0% {
    transform: translateY(0); /* Sin desplazamiento vertical */
  }
  100% {
    transform: translateY(5px); /* Desplazamiento vertical hacia abajo */
  }
}
.ghost:hover {
  color: rgba(146, 92, 197, 0.842);
  animation: animacionVertical 1s infinite alternate;
}

button {
  background-color: #fff;
  border: 1px solid rgba(95, 37, 150);
  width: 7.2em;
  height: 2em;
  font-size: 17px;
  border-radius: 0.4em;
  transition: 0.5s;
  padding: 0px;
}

button:hover {
  background-color: rgba(95, 37, 150);
}

.button2:hover {
  background-color: rgba(135, 107, 160, 0.712);
}
</style>
