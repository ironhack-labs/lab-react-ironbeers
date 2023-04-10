import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import TextInput from './TextInput'
import beersService from '../services/beers.service'

export default function BeersList() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    beersService.list()
      .then((beersFromApi) => setBeers(beersFromApi))
      .catch(console.error)
  }, [])

  const [search, setSearch] = useState("")

  const handleChange = (ev) => {
    setSearch(ev.target.value)
    beersService.filter(ev.target.value)
      .then((filteredBeers) => {
        setBeers(filteredBeers)
      })
      .catch(console.error)
  }

  return (
    <>
      <Header />
      <div className="mx-3">
        <TextInput label="Search Beer" name="search" onChange={handleChange} value={search} />
        {search && !beers.length && <h1 className="mt-3 font-bold text-xl">Oooops! no beers with that name</h1>}
        {beers.map((beer) => (
          <div className="card my-3 p-3" key={beer.id}>
            <div className="row g-0">
              <div className="col-md-1">
                <img src={beer.image} className="img-fluid rounded-start h-36" alt="beer" />
              </div>
              <div className="col-md-11">
                <div className="card-body">
                  <Link to={`/beers/${beer.id}`} className="card-title text-2xl font-semibold">{beer.name}</Link>
                  <p className="card-text font-extralight text-lg">{beer.tagline}</p>
                  <p className="card-text text-xs"><small className="text-body-secondary font-bold text-sm">Created by: </small>{beer.contributedBy}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
