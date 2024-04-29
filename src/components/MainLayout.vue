<template>
  <nav
    style="padding: 0px"
    class="navbar navbar-expand-lg navbar-dark bg-dark border border-2 custom-fondo"
  >
    <div class="container-fluid">
      <div class="navbar-collapse d-flex justify-content-between">
        <ul class="navbar-nav me-auto ms-4">
          <div class="m-2">
            <router-link to="/">
              <i class="ghost fa-solid fa-ghost fa-4x"></i>
            </router-link>
          </div>
        </ul>
        <ul class="ghost navbar-nav" style="margin-right: 0%;">
          <div class="m-2">
            <h3>Ghost</h3>
          </div>
        </ul>
        <ul class="navbar-nav mx-auto">
          <nav class="nav-custom">
            <router-link to="/main"
              ><i class="fa-solid fa-house fa-2x"></i
            ></router-link>
            <router-link to="/publicar"
              ><i class="fa-solid fa-pencil fa-2x"></i
            ></router-link>
            <router-link to="/perfil"
              ><i class="fa-regular fa-user fa-2x"></i
            ></router-link>
          </nav>
        </ul>

        <ul class="navbar-nav me-4">
          <div class="m-2">
            <router-link to="/publicar">
              <i class="ghost fa-solid fa-grip fa-3x"></i>
            </router-link>
          </div>
          <span class="separator"></span>
          <div class="m-2">
            <router-link to="/perfil">
              <i class="ghost fa-regular fa-circle-user fa-3x"></i>
            </router-link>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.custom {
  background-color: var(--fourth-color);
}
.ghost {
  color: var(--main-color);
  transition: 0.5s;
  font-family: "Font Awesome 6 Free";
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
  color: var(--sec-color);
  animation: animacionVertical 1s infinite alternate;
}

.separator {
  color: #999;
  font-size: 1.2em;
  margin: 0 0.5em;
}

.separator:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 1px;
  background-color: var(--third-color);
  margin: 0 0.25em;
}

.nav-custom {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80px;
}

.nav-custom a {
  margin-bottom: 0px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 2px;
  text-decoration: none;
  color: var(--fourth-color);
}

.nav-custom a.router-link-exact-active {
  color: var(--sec-color);
  border-bottom: solid 7px;
  border-radius: 5px;
}
</style>
