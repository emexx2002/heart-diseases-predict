import axios from "axios";


const baseUrl = ""

export const PredictService = {
    predict : () => axios.get(`${baseUrl}/api/predict`)
}