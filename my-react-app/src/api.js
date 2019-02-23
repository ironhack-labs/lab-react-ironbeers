import axios from 'axios'

const service = axios.create({
  baseURL: 'https://ironbeer-api.herokuapp.com/beers',
})

export default {
  getBeers() {
    return service.get('/all')
      .then(res => res.data)
  },
  getBeersCached() {
    // If we have 'beers' in the localStorage
    if (localStorage.getItem('beers')) {
      console.log('CACHE')
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(localStorage.getItem('beers')))
      })
    }
    else {
      console.log('NO CACHE')
      return service.get('/all')
        .then(res => {
          let beers = res.data
          // Save the stringified beers in the localStorage
          localStorage.setItem('beers', JSON.stringify(beers))
          return beers
        })
    }
  },
  // In other files, we can write
  // api.getBeerDetail("5b0cfee6861982000a48fd2a")
  //   .then(beers => { ..... })
  getBeerDetail(id) {
    return service.get('/single/' + id)
      .then(res => res.data)
  }
}