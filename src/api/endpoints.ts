import { AxiosResponse, AxiosError } from "axios";
import request from "./apiService";

const fetchCharts = () => {
    return request({
        url: `overview`,
        method: 'get'
    })
        .then(
            (response: AxiosResponse) => {
                return response.data
            }
        )
        .catch(
            (error: AxiosError) => {
                return error
            }
        )
}

const fetchCampaigns = () => {
    return request({
        url: `campaigns`,
        method: 'get'
    })
        .then(
            (response: AxiosResponse) => {
                return response.data
            }
        )
        .catch(
            (error: AxiosError) => {
                return error
            }
        )
}

const apiEndpoints = {
    fetchCharts,
    fetchCampaigns
}

export default apiEndpoints;