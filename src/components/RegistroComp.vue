<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-10">
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
              <form>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="nombre" class="form-label">Nombre(s)</label>
                    <input type="text" class="form-control" id="nombre" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="apellido" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="apellido" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="user" class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="user" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="nac" class="form-label"
                      >Fecha de nacimiento</label
                    >
                    <input type="date" class="form-control" id="nac" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="reppassword" class="form-label">Repetir Password</label>
                    <input type="password" class="form-control" id="reppassword" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-6 text-end">
                    <button>
                      <router-link to="/" class="custom-link"
                        >Si, registrarme</router-link
                      >
                    </button>
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
export default {};
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
