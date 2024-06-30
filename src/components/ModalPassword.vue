<template>
  <div class="container" style="width: 50%">
    <div class="row">
      <div class="card mt-4" style="margin-bottom: 50px">
        <div class="row">
          <div
            class="col-md-4 gradient-custom text-center text-white"
            style="
              border-top-left-radius: 0.5rem;
              border-bottom-left-radius: 0.5rem;
            "
          >
            <img
              v-if="userImage"
              :src="userImage"
              alt="Avatar"
              class="img-fluid my-5"
              style="border-radius: 15%; width: 130px"
            />
            <img
              v-else
              src="../assets/avatar.png"
              alt="Avatar"
              class="img-fluid my-5"
              style="border-radius: 15%; width: 170px"
            />
            <h4>Realiza un cambio a tus credenciales de ingreso</h4>
            <div class="m-4">
              <button class="btn btn-danger" style="width: 75%">
                <router-link to="/perfil">
                  <p style="color: rgb(41, 40, 40)">Regresar</p>
                </router-link>
              </button>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body p-4">
              <h6>Verificacion</h6>
              <hr class="mt-0 mb-4" />
              <form @submit.prevent="modificarpass">
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="passold1" class="form-label"
                      >Password actual</label
                    >
                    <input
                      type="password"
                      v-model="passold1"
                      class="form-control"
                      id="passold1"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="passold2" class="form-label"
                      >Ingresa nuevamente</label
                    >
                    <input
                      type="password"
                      v-model="passold2"
                      class="form-control"
                      id="passold2"
                      required
                    />
                  </div>
                </div>
                <h6>Nuevas credenciales</h6>
                <hr class="mt-3 mb-3" />
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="passnew1" class="form-label">Password</label>
                    <input
                      type="password"
                      v-model="passnew1"
                      class="form-control"
                      id="passnew1"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="passnew2" class="form-label"
                      >Repetir Password</label
                    >
                    <input
                      type="password"
                      v-model="passnew2"
                      class="form-control"
                      id="passnew2"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="text-center mt-3">
                    <button style="width: 50%" type="submit">
                      Registrar cambios
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
</template>

<script>
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      passold1: "",
      passold2: "",
      passnew1: "",
      passnew2: "",
    };
  },
  methods: {
    ...mapActions(["recuperarmisPubs"]),

    async modificarpass() {
      if (this.passold1 != this.passold2 || this.passnew1 != this.passnew2) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Las contraseñas no coinciden",
          icon: "error",
        });
        return;
      }
      var hashedText = CryptoJS.SHA256(this.passold1).toString(
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
      console.log("todo bien");
      var respuesta = "";
      try {
        respuesta = await this.$services.auth.modificarPass({
          id: this.usuario.datos.id,
          password: this.passnew1,
        });
        if (respuesta.data.success === 1) {
          Swal.fire({
            title: "¡Genial!",
            text: "Password modificado correctamente",
            icon: "success",
          });
          const response = await this.$services.auth.login({
            username: this.usuario.datos.username,
            password: this.passnew1,
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
  },
  computed: {
    ...mapState(["usuario"]),
    ...mapGetters(["userImage"]),
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
