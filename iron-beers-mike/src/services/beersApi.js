import axios from 'axios'

const link = 'https://ironbeer-api.herokuapp.com/beers'

/**
 *
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const allBeers = ()=>{
    return axios.get(`${link}/all`)
        .then(r=> r.data)
        .catch(e=> e.response)
}
/**
 *
 * @param beer
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const newBeer = (beer)=>{
    return axios.post(`${link}/new`,beer)
        .then(r=> r.data)
        .catch(e=> e.response)
}
/**
 *
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const randomBeer = () =>{
    return axios.get(`${link}/random`)
        .then(r=> r.data)
        .catch(e=> e.response)
}