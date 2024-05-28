export default function createAuthService(axios, baseURL) {
  return {
    login(credenciales) {
      return axios.post(`${baseURL}usuario/login`, credenciales);
    },
    getAllUsers() {
      return axios.get(`${baseURL}usuario/lista`);
    },
  };
}
