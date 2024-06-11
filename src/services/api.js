import axios from "axios";

const api = axios.create({
  baseURL: "http://server.pwvintage.com/api/api_users.php",
  insecureHTTPParser: true,
});

export default api;
