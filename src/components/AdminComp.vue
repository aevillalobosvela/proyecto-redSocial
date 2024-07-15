<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-light p-3" style="background-color: #c7e5fa">
      <h4>Panel de administracion</h4>
      <a
        class="btn btn-lg btn-danger"
        style="display: flex; align-items: center"
        @click="regresar"
      >
        <i class="fa fa-person-through-window fa-2x mx-2"></i> Regresar
      </a>
    </nav>
  </div>
  <div class="container">
    <div class="row">
      <div class="col col-5">
        <div><h3>Usuarios</h3></div>
        <table class="custom-table" id="userTable" style="width: 100%">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>Fec. Nac.</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.nombre }}</td>
              <td>{{ user.apellido }}</td>
              <td>{{ user.username }}</td>
              <td>{{ formatDate(user.fecnac) }}</td>
              <td>
                <a
                  class="btn btn-sm btn-danger"
                  style="display: flex; align-items: center"
                  @click="eliminaruser(user.id)"
                >
                  <i class="fa fa-x mx-auto"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col col-7">
        <div><h3>Publicaciones</h3></div>
        <table id="pubTable" class="custom-table" style="width: 100%">
          <thead>
            <tr>
              <th>Contenido</th>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="publicacion in usersconpub" :key="publicacion.cod_pub">
              <td>{{ publicacion.contenido }}</td>
              <td>{{ formatDate(publicacion.fec_pub) }}</td>
              <td>{{ publicacion.username }}</td>
              <td>
                <a
                  class="btn btn-sm btn-danger"
                  style="display: flex; align-items: center"
                  @click="eliminarpub(publicacion.cod_pub)"
                >
                  <i class="fa fa-x mx-auto"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["recuperarPubs"]),
    ...mapActions(["recuperarUsersconPub"]),
    ...mapActions(["fetchUsers"]),

    regresar() {
      this.$router.push("/");
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    async eliminaruser(id) {
      const result = await Swal.fire({
        title: "Estas seguro?",
        text: "Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      });

      if (result.isConfirmed) {
        try {
          await this.$services.auth.eliminarUser({
            id: id,
          });
          this.fetchUsers();
        } catch (error) {
          console.log(error);
        }
      }
    },

    async eliminarpub(pub_id) {
      const result = await Swal.fire({
        title: "Estas seguro?",
        text: "Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      });

      if (result.isConfirmed) {
        try {
          await this.$services.auth.eliminarPub({
            cod_pub: pub_id,
          });
          this.recuperarUsersconPub();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

  async mounted() {
    await this.recuperarPubs();
    this.recuperarUsersconPub();
    this.fetchUsers();
  },
  computed: {
    ...mapState(["users", "usersconpub"]),
  },
};
</script>

<style>
.thum {
  transition: 0.3s;
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
.custom-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
  color: #333;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.custom-table tbody tr:hover {
  background-color: #ddd;
}
</style>
