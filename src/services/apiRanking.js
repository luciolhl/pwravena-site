import axios from "axios";

const apiRanking = axios.create({
    baseURL: "http://192.168.1.9/api/index.php",
    insecureHTTPParser: false,
    params: {
        token: "5mCjXZptT5fX4HdKwksjaiowlamso001823masd82kasd9al123"
    }
})

export default apiRanking;