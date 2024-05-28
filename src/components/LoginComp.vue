<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-10 mt-5">
          <div class="card border">
            <div class="custom-fondo card-header text-center">
              <div class="m-3">
                <i class="ghost fa-solid fa-ghost fa-5x"></i>
              </div>
              <p style="margin-bottom: 0px">¡Bienvenido a Ghost® usuario!</p>
            </div>
            <div class="card-body">
              <form @submit.prevent="enviar">
                <div class="mb-3">
                  <label for="user" class="form-label">Usuario</label>
                  <input
                    type="text"
                    v-model="username"
                    class="form-control"
                    id="user"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn">Iniciar sesion</button>
                  <!-- <button>
                    <router-link to="/publicaciones" class="custom-link"
                      >Ingresar</router-link
                    >
                  </button> -->
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <p style="margin-bottom: 0px">¿No tienes una cuenta?</p>
              <router-link to="/registro" style="color: blueviolet"
                >Crea una cuenta</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import { mapActions } from "vuex"; */
import Swal from "sweetalert2";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async enviar() {
      try {
        const response = await this.$services.auth.login({
          username: this.username,
          password: this.password,
        });
        Swal.fire({
          title: "¡Genial!",
          text: "Bienvenido usuario",
          icon: "success",
        });
        this.$store.commit('setUserData', response.data);
        this.$router.push("/publicaciones");
      } catch (error) {
        console.error("Login failed:");
        Swal.fire({
          title: "Que mal :(",
          text: "Nombre de usuario o contraseña incorrectos",
          icon: "error",
        });
      }
    },

    /* ...mapActions(["loginUser"]),
    async login() {
      const loginSuccessful = await this.loginUser({
        username: this.username,
        password: this.password,
      });
      if (loginSuccessful) {
        Swal.fire({
          title: "¡Genial!",
          text: "Bienvenido usuario",
          icon: "success",
        });
        this.$router.push("/publicaciones");
      } else {
        Swal.fire({
          title: "Que mal :(",
          text: "Nombre de usuario o contraseña incorrectos",
          icon: "error",
        });
      }
    }, */
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

.ghost {
  color: rgba(95, 37, 150);
  transition: 0.5s;
}
@keyframes animacionVertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
.ghost:hover {
  color: rgba(195, 141, 198);
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
</style>
