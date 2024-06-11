import axios from "axios";

const apiRanking = axios.create({
  baseURL: "http://server.pwvintage.com/api/index.php",
  insecureHTTPParser: true,
  params: {
    password: "5mCjXZptT5fX4HdKwksjaiowlamso001823masd82kasd9al123",
  },
});

export default apiRanking;
