import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_API_BEER
})

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, error => {
    if (error.response.status === 401) {
        window.location.href = '/';
    }
    return Promise.reject(error);
})