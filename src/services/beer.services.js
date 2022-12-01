import axios from 'axios'

class Beerservice {

  constructor() {

    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`

    })
  }


  getBeers() {
    return this.api.get('/')
  }

  getOneBeer(beer_id) {
    return this.api.get(`/${beer_id}`)
  }

  randomBeer() {
    return this.api.get(`/random`)
  }

  newBeer(newBeerData) {
    return this.api.post(`/new`, newBeerData)
  }

  // getOneBfff(searchTerm) {
  //   return this.api.get(`/search?q=${searchTerm}`)
  // }


}

const beersService = new Beerservice()

export default beersService