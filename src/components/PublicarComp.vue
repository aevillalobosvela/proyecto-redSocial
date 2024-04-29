<template>
  <div class="card border p-3">
    <h2 class="display-6">Crear publicacion</h2>
    <div class="card-body pb-0">
      <div class="card border">
        <div class="card-header">
          <div class="row">
            <div class="col-1">
              <i class="mt-2 me-3 fas fa-user fa-2x"></i>
            </div>
            <div class="col-5">
              <h5 style="margin: 0px">Usuario</h5>
              <p style="margin: 0px">
                <small>16 de abril</small>
              </p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="i">¿En que estas pensando...?</p>
          <div class="input-group" style="height: 170px">
            <textarea class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="mt-3 text-end">
        <button class="rounded w-40">
          <router-link to="/publicaciones" class="custom-link"
            >Publicar</router-link
          >
        </button>
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
