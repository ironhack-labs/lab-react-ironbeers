import axios from 'axios'

export default class services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers'
        })
    }

    getAllBeers = () => {

        return this.service.get('/')
            .then(response => response.data)
            .catch(err => console.log('Error', err))
    }


    getOneBeer = id => {
        return this.service.get(`/${id}`)
            .then(response => response.data)
            .catch(err => console.log('Error', err))
    }

    getRandomBeer=()=>{
        return this.service.get('/random')
            .then(response=>response.data)
            .catch(err => console.log('Error', err))            
    }

    addNewBeer=(theBeer)=>{
        return this.service.post('/new', theBeer)
            .then(theBeer=> alert(theBeer.data.message))
            .catch(err => console.log('Error', err))            
    }

    
}