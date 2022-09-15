import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BeerCard from '../../components/beer-card/BeerCard'



function AllBeersScreen() {
  const [beers, setBeers] = useState([])
  const [search, setSearch] = useState(null)

  useEffect(() => {
    // search ? (
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${search ? `search?q=${search}` : ""}`)
        .then((res) => {
          setBeers(res.data)
        })
        .catch(error => console.error(error))
  //   ) : (axios
  //         .get("https://ih-beers-api2.herokuapp.com/beers")
  //         .then((res) => {
  //           setBeers(res.data)
  //         })
  //         .catch(error => console.error(error))
  }, [search])

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  } 
  
  return (
    <div className='mt-2 container d-flex flex-column align-items-center'>
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
      </div>
      {beers.length === 0 ? 
        (
          <div className='mt-5 pt-5'>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden"><h1>Loading...</h1></span>
            </div>
          </div>
        ) : 
        (beers.map((beer) => (
          <BeerCard key={beer._id} {...beer}/>))
      )}
    </div>
  )
}

export default AllBeersScreen