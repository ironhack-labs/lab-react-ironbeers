import axios from 'axios'

const service = axios.create({
  baseURL: 'https://ironbeer-api.herokuapp.com/beers',
})

export default {
  getBeers(){
    return service.get('/all')
    .then(res => res.data)
  },
  getBeersRandom(){
    return service.get('/random')
    .then(res => res.data[0])
  },
  getBeersCached(){
    if (localStorage.getItem('beers')){
      return JSON.parse(localStorage.getItem('beers'))
    } else {
      return service.get('/all')
    .then(res => {
      let beers = res.data
      localStorage.setItem('beers', JSON.stringify('beers'))
      return beers
    })
    }
  },
  getBeerDetail(id) {
    return service.get('/single/'+id)
    .then(res => res.data)
  }
}