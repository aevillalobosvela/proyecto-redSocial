export default function createAuthService(axios, baseURL) {
  return {
    login(credenciales) {
      return axios.post(`${baseURL}login`, credenciales);
    },
    getAllUsers() {
      return axios.get(`${baseURL}lista`);
    },
    registrarUsuario: async (datosUsuario) => {
      try {
        const formData = new FormData();
        formData.append("nombre", datosUsuario.nombre);
        formData.append("apellido", datosUsuario.apellido);
        formData.append("username", datosUsuario.username);
        formData.append("fecnac", datosUsuario.fecnac);
        formData.append("password", datosUsuario.password);
        if (datosUsuario.imagenperfil) {
          formData.append("imagenperfil", datosUsuario.imagenperfil);
        }
        const response = await axios.post(`${baseURL}insertar`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data; // Puedes manejar la respuesta del backend aquí si es necesario
      } catch (error) {
        throw new Error(`Error al registrar usuario: ${error.message}`);
      }
    },
    modificarUsuario: async (datosUsuario) => {
      try {
        const formData = new FormData();
        formData.append("id", datosUsuario.id);
        formData.append("nombre", datosUsuario.nombre);
        formData.append("apellido", datosUsuario.apellido);
        formData.append("username", datosUsuario.username);
        formData.append("fecnac", datosUsuario.fecnac);
        if (datosUsuario.imagenperfil) {
          formData.append("imagenperfil", datosUsuario.imagenperfil);
        }
        const response = await axios.post(`${baseURL}actualizar`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`Error al registrar usuario: ${error.message}`);
      }
    },
    eliminarUser(dato) {
      return axios.delete(`${baseURL}borrar`, { params: dato });
    },
    modificarPass(datos) {
      return axios.post(`${baseURL}actualizarpass`, datos);
    },
    recuperarPubs() {
      return axios.get(`${baseURL}plista`);
    },
    publicar: async (datosPub) => {
      try {
        const formData = new FormData();
        formData.append("contenido", datosPub.contenido);
        formData.append("likes", datosPub.likes);
        formData.append("fec_pub", datosPub.fec_pub);
        formData.append("id", datosPub.id);
        if (datosPub.imagenpubli) {
          formData.append("imagenpubli", datosPub.imagenpubli);
        }
        const response = await axios.post(`${baseURL}pinsertar`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`Error al publicar: ${error.message}`);
      }
    },
    recuperarComs(dato) {
      return axios.get(`${baseURL}cpublista`, { params: dato });
    },
    comentar(datos) {
      return axios.put(`${baseURL}cinsertar`, datos);
    },
    recuperarUsersconPub() {
      return axios.get(`${baseURL}precuperar_user`);
    },
    toprecuperarUsersconPub() {
      return axios.get(`${baseURL}ptoprecuperar_user`);
    },
    recuperarmisPubs(dato) {
      return axios.get(`${baseURL}pmis_pub`, { params: dato });
    },
    eliminarPub(dato) {
      return axios.delete(`${baseURL}peliminar`, { params: dato });
    },
    recuperarlikes(dato) {
      return axios.get(`${baseURL}llistado_user`, { params: dato });
    },
    darlike(dato) {
      return axios.put(`${baseURL}linsertar`, dato);
    },
    quitarlike(dato) {
      return axios.put(`${baseURL}lquitar`, dato);
    },
    recuperarmislikes(dato) {
      return axios.get(`${baseURL}lmislikes`, { params: dato });
    },
  };
}
