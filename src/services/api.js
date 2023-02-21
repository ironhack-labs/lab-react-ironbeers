//archivo para hacer peticiones
import axios from "axios"

const _api = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
    timeout: 10000
})


_api.interceptors.request.use((config)=>{
    const storedtoken = localStorage.getItem("authToken")
    if(storedtoken){
        config.headers = { Authorization: `Bearer ${storedtoken}`}
    }
    return config
})

export default _api;