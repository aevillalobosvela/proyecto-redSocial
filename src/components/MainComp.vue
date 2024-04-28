<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border border-2">
    <div class="container-fluid">
      <div class="navbar-collapse">
        <ul class="navbar-nav me-auto">
          <div class="m-2">
            <i class="ghost fa-solid fa-ghost fa-3x"></i>
          </div>
        </ul>
      </div>
      <a class="navbar-brand mx-auto">
        <div class="m-2">
          <router-link to="/publicar"
            ><i class="ghost fa-solid fa-pen-to-square fa-2x"></i
          ></router-link>
        </div>
      </a>
      <div class="navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <div class="m-2">
            <i class="ghost fa-solid fa-circle-user fa-3x"></i>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row mt-2">
      <div class="col-3">
        <div class="card border">
          <div class="card-header">
            <p>Usuarios</p>
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
        <div class="card border">
          <p>Publicaciones</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nemo voluptatem, numquam ea commodi saepe minus ut, repellat
            suscipit similique non, voluptates quis sequi? Debitis omnis at
            expedita eos dolorem.
          </p>
        </div>
      </div>
      <div class="col-3">
        <div class="card border">
          <div class="card-header">
            <p>Mi perfil</p>
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
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.ghost {
  color: rgba(95, 37, 150, 0.822);
  transition: 0.5s;
}
@keyframes animacionVertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5px);
  }
}
.ghost:hover {
  color: rgba(146, 92, 197, 0.842);
  animation: animacionVertical 1s infinite alternate;
}
</style>
