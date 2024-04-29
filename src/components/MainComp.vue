<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-3">
        <div class="card border">
          <div class="card-header text-center">
            <h2 class="display-6">Usuarios</h2>
          </div>
          <div class="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              nemo voluptatem, numquam ea commodi saepe minus ut, repellat
              suscipit similique non, voluptates quis sequi? Debitis omnis at
              expedita eos dolorem.
            </p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card border p-3">
          <h2 class="display-6">Publicaciones</h2>
          <div class="card border m-2">
            <div class="card-header">
              <div class="row">
                <div class="col-6">
                  <h5 style="margin: 0px; margin-top: 5px">Usuario</h5>
                </div>
                <div class="col-6 text-end">
                  <i class="thum fa fa-thumbs-up fa-2x"></i>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio cum accusantium modi placeat iste est ad at.
                Delectus, commodi laboriosam officia deleniti mollitia nulla et
                autem ex nam doloribus labore?
              </p>
            </div>
          </div>
          <div class="card border m-2">
            <div class="card-header">
              <div class="row">
                <div class="col-6">
                  <h5 style="margin: 0px; margin-top: 5px">Usuario</h5>
                </div>
                <div class="col-6 text-end">
                  <i class="thum fa fa-thumbs-up fa-2x"></i>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio cum accusantium modi placeat iste est ad at.
                Delectus, commodi laboriosam officia deleniti mollitia nulla et
                autem ex nam doloribus labore?
              </p>
            </div>
          </div>
          <div class="card border m-2">
            <div class="card-header">
              <div class="row">
                <div class="col-6">
                  <h5 style="margin: 0px; margin-top: 5px">Usuario</h5>
                </div>
                <div class="col-6 text-end">
                  <i class="thum fa fa-thumbs-up fa-2x"></i>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio cum accusantium modi placeat iste est ad at.
                Delectus, commodi laboriosam officia deleniti mollitia nulla et
                autem ex nam doloribus labore?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card border">
          <div class="card-header text-center">
            <h2 class="display-6">Mi perfil</h2>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
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
