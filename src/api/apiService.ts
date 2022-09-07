import axios from "axios";

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://5c3db915a9d04f0014a98a79.mockapi.io/"
});

export default apiService;