<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-5 mb-4 col-sm-12 mb-lg-0">
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
                src="../assets/perfi.jpg"
                alt="Avatar"
                class="img-fluid my-5"
                style="border-radius: 15%; width: 170px"
              />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Informacion</h6>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Nombre(s)</h6>
                    <p class="text-muted">Nombres de ejemplo</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Apellidos</h6>
                    <p class="text-muted">Apellidos de ejemplo</p>
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Usuario</h6>
                    <p class="text-muted">Usuario</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Fec. de nacimiento</h6>
                    <p class="text-muted">11/11/11</p>
                  </div>
                </div>
                <h6>Interaccion</h6>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Publicaciones</h6>
                    <p class="text-muted">14</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Contactos</h6>
                    <p class="text-muted">22</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-sm-12 mt-3 mb-2">
        <div class="card border p-3">
          <h2 class="display-6">Mis publicaciones</h2>
          <div class="card-body" style="max-height: 420px; overflow-y: auto">
            <div v-for="index in 10" :key="index">
              <div class="card border mb-4">
                <div class="card-header">
                  <div class="row">
                    <div class="col-1">
                      <i class="mt-2 me-3 fas fa-user fa-2x"></i>
                    </div>
                    <div class="col-5">
                      <h5 style="margin: 0px">Usuario</h5>
                      <p style="margin: 0px">
                        <small>4 de abril</small>
                      </p>
                    </div>
                    <div style="display: flex; justify-content: end;" class="col-6 text-end">
                      <p style="margin: 4px;">
                        <small>15</small>
                      </p>
                      <i class="mt-2 thum fa fa-thumbs-up fa-2x"></i>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio cum accusantium modi placeat iste est ad at.
                    Delectus, commodi laboriosam officia deleniti mollitia nulla
                    et autem ex nam doloribus labore?
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="row mb-2">
                      <div class="col-1">
                        <i class="mt-1 fas fa-user fa-lg"></i>
                      </div>
                      <div class="col-11">
                        <div class="container border rounded">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Distinctio cum accusantium modi placeat.
                        </div>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-1">
                        <i class="mt-1 fas fa-user fa-lg"></i>
                      </div>
                      <div class="col-11">
                        <div class="container border rounded">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Distinctio cum accusantium modi placeat.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="card-footer">
                  <input
                    type="text"
                    class="form-control"
                    id="comment"
                    placeholder="Escribe un comentario..."
                  />
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
export default {};
</script>
<style>
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
</style>
