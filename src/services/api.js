import axios from "axios";

const api = axios.create({
  baseURL: "https://pwvintage.com/api/api_users.php",
  insecureHTTPParser: true,
});

export default api;
