import axios from 'axios'

const API = 'https://ironbeer-api.herokuapp.com/beers'


export const All = ()=>{
    return axios.get(`${API}/all`)
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const New = (beer)=>{
    return axios.post(`${API}/new`,beer)
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const Random = () =>{
    return axios.get(`${API}/random`)
        .then(r=> r.data)
        .catch(e=> e.response)
}