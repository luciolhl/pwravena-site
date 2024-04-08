import axios from "axios";

const apiRanking = axios.create({
    baseURL: "https://server.pwvintage.com.br/api-ranking/index.php",
    insecureHTTPParser: true,
    params: {
        password: "P48AG4673eA41qWQeqe2YEDYJeteKKAtg"
    }
})

export default apiRanking;