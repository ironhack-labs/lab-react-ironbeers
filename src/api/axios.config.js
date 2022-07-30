import axios from 'axios'

export const app = axios.create({ baseURL: process.env.REACT_APP_API_URL })
