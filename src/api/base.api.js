import axios from "axios";

const stockApi = axios.create({
    baseURL: 'http://localhost:8000/stock/api/v1/productos/'
})

const loginApi = axios.create({
    baseURL: 'http://localhost:8000/login/'
})

export const getAllStock = () => {
    return stockApi.get('/')
}

export const loginTask = () => {
    return axios.post('http://localhost:8000/login/login/')
}