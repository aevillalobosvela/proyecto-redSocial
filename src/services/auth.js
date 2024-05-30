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
    recuperarPubs() {
      return axios.get(`${baseURL}plista`);
    },
    publicar(datos) {
      return axios.put(`${baseURL}pinsertar`, datos);
    },
  };
}