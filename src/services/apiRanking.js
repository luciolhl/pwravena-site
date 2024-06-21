import axios from "axios";

const apiRanking = axios.create({
  baseURL: "https://pwvintage.com/api/index.php",
  insecureHTTPParser: true,
  params: {
    token: "5mCjXZptT5fX4HdKwksjaiowlamso001823masd82kasd9al123",
  },
});

export default apiRanking;
