<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-3 mb-3">
        <div class="card border">
          <div class="card-header">
            <h2 class="display-6">Usuarios</h2>
          </div>
          <div class="card-body" style="max-height: 435px; overflow-y: auto">
            <div v-for="index in 10" :key="index">
              <div class="card border mb-3">
                <h5>
                  <i class="me-3 fas fa-person fa-lg"></i>Usuario {{ index }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        
      </div>

      <div class="col-3">
        <div class="card border">
          <div class="card-header text-center">
            <h2 class="display-6">Mi perfil</h2>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                class="m-3"
                style="border-radius: 15%"
                src="../assets/perfi.jpg"
                width="170"
                height="170"
                alt=""
              />
              <h5>Nombre completo</h5>
              <h5><em>Usuario</em></h5>
            </div>
            <p><em>Publicaciones:</em> 15</p>
            <p><em>Contactos:</em> 15</p>
          </div>
          <div class="text-center mb-3">
            <a class="btn btn-light border">
              <i class="fa fa-door-open fa-lg"></i
              ><router-link to="/main" class="custom-link"
                >Cerrar sesion</router-link
              ></a
            >
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
