import axios from "axios";

const apiRanking = axios.create({
  baseURL: "http://server.pwvintage.com/api-ranking/index.php",
  insecureHTTPParser: true,
  params: {
    password: "P48AG4673eA41qWQeqe2YEDYJeteKKAtg",
  },
});

export default apiRanking;
