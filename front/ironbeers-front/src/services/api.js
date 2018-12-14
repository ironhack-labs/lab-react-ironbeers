import axios from 'axios'

const chelitas = 'https://ironbeer-api.herokuapp.com/beers'

//List
export const drawAll = () =>{
    return axios.get(chelitas+ '/allbeers')
        .then(r=>r.data)
        .catch(e=>e.response)
}