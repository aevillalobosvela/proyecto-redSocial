export default function createAuthService(axios, baseURL) {
  return {
    login(credenciales) {
      return axios.post(`${baseURL}login`, credenciales);
    },
    getAllUsers() {
      return axios.get(`${baseURL}lista`);
    },
    registrarUsuario(datos) {
      return axios.put(`${baseURL}insertar`, datos);
    },
    modificarUsuario(datos) {
      return axios.post(`${baseURL}actualizar`, datos);
    },
    modificarPass(datos) {
      return axios.post(`${baseURL}actualizarpass`, datos);
    },
    recuperarPubs() {
      return axios.get(`${baseURL}plista`);
    },
    publicar(datos) {
      return axios.put(`${baseURL}pinsertar`, datos);
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
  };
}
