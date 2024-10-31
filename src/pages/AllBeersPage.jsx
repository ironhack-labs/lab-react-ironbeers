import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import Loader from '../components/loader'
import { API_URL } from '../config/api'
import axios from 'axios'

function AllBeersPage () {
  const [beers, setBeers] = useState(null)
  const [query, setQuery] = useState('')

  const getAllBeers = () => {
    axios
      .get(`${API_URL}/beers`)
      .then(res => {
        setBeers(res.data)
      })
      .catch(e => console.log('error', e))
  }
  const searchBeer = () => {
    axios
      .get(`${API_URL}/beers/search?q=${query}`)
      .then(res => setBeers(res.data))
      .catch(e => console.log('there is an error', e))
  }
  useEffect(() => {
    if (query) {
      searchBeer()
    } else {
      axios
        .get(`${API_URL}/beers`)
        .then(res => {
          setBeers(res.data)
        })
        .catch(e => console.log('error', e))
    }
  }, [query])
  useEffect(() => {
    getAllBeers
  }, [])
  if (beers === null) {
    return <Loader />
  }
  return (
    <>
      <Search query={query} setQuery={setQuery} />

      <div className='d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4'>
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={'/beers/' + beer._id}>
                  <div
                    className='card m-2 p-2 text-center'
                    style={{ width: '24rem', height: '18rem' }}
                  >
                    <div className='card-body'>
                      <img
                        src={beer.image_url}
                        style={{ height: '6rem' }}
                        alt={'image of' + beer.name}
                      />
                      <h5 className='card-title text-truncate mt-2'>
                        {beer.name}
                      </h5>
                      <h6 className='card-subtitle mb-3 text-muted'>
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className='card-text'>
                        Created by: {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default AllBeersPage
