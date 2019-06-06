import axios from 'axios'

export default class services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers'
        })
    }

    getAllBeer = () => {

        return this.service.get('')
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }


    getOneBeer = id => {
        return this.service.get(`/${id}`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }


    getRandomBeer = id => {
      return this.service.get(`/random`)
          .then(res => res.data)
          .catch(err => console.log('Error', err))
  }


  newBeer = (data) => {
      console.log("entra al service")
    return this.service.post(`/new`, data)
        .then(res => console.log("respuesta!", res) )
        .catch(err => console.log('Error', err))
}
}