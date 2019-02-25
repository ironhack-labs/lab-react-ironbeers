import axios from 'axios'

const base_url = 'https://ironbeer-api.herokuapp.com/beers'

export const getBeers = ()=> {
    axios.get(`${base_url}/all`)
    .then(cheves=>{
        console.log(cheves)
    })
}