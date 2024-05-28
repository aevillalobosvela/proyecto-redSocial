export default function createAuthService(axios, baseURL) {
    return {
        login(credenciales) {
            return axios.post(`${baseURL}usuario/login`, credenciales);
        }
    };
}