import axios from "axios";

const api = axios.create({
    baseURL: "https://server.pwvintage.com.br/api_users.php",
    insecureHTTPParser: true
})

export default api;