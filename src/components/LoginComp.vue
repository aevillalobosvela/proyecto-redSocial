<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-10">
          <div class="card border">
            <div class="card-header text-center">
              <div class="m-3">
                <i class="ghost fa-solid fa-ghost fa-5x"></i>
              </div>
              <p>¡Bienvenido usuario!</p>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="user" class="form-label">Usuario</label>
                  <input type="text" class="form-control" id="user" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div class="text-center">
                  <button>
                    <router-link to="/about" class="custom-link"
                      >Ingresar</router-link
                    >
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <p style="margin-bottom: 0px">¿No tienes una cuenta?</p>
              <router-link to="/about" style="color: blueviolet"
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
export default {};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: rgba(95, 37, 150);
  transition: 0.5s;
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.custom-link:hover {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.ghost {
  color: rgba(95, 37, 150, 0.822);
  transition: .5s;
}
.ghost:hover {
  color: rgba(170, 128, 209, 0.842);
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
