import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/'

const beersApi = axios.create({ baseURL })

//      const { data: { results } } = await axios.get(https://ih-beers-api2.herokuapp.com)


export const getBeers = async() => {
    const { data } = await beersApi.get('/beers')
    return data;
}

export const getOneBeerRandom= async ()=>{
    //beers/random te genera una aleatorio solo
    const {data}= await beersApi.get(`/beers/random`)
    return data
}

export const getDetails= async(Id)=>{
    const {data} = await beersApi.get(`/beers/${Id}`)
    return data
}
