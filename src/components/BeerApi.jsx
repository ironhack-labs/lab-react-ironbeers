import axios from 'axios'




const URL = axios.create({
        baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
      })

      const BeerListFetch = {
        fetchAll: () => {
          return URL.get('/')
        },
        getBeerDetails: (id) => {
          return URL.get(`/${id}`)
        },
        getRandomBeer: () => {
          return URL.get('/random')
        },
        AddNewBeer: (data) => {
            console.log(data)
          return URL.post('/new', data)
        },
        searchBeer: (query) => {
            console.log(query)
          return URL.get(`/search?q=${query}`)
        }
      }




export default BeerListFetch