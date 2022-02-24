import React from 'react'
import BeerService from '../services/beerServices'
import { useState, useEffect } from 'react'
import './Beers.css'
import { Link } from 'react-router-dom'

function Beers() {
  const [Beers, setBeers] = useState([])
  useEffect(() => {
    loadBeers()
  }, [])
 // console.log(Beers)
  const loadBeers = () => {
    BeerService
      .getAllBeers()
      .then(({ data }) => setBeers(data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <header className='header'>
        <Link to="/">
          <img src="/assets/images.png" />
        </Link>
      </header>
      <div className='BeerList' > {Beers.map((Beer) => {
        return (
          
          <Link to={`/BeerList/BeerDetails/${Beer._id}`} key={Beer._id}>
          <div className='col-lg-4 col-md-12 mb-4 mb-lg-0 Birra'>
            <img  src={Beer.image_url} />
            <h3>{Beer.name}</h3>
            <h4>{Beer.tagline}</h4>
            <hr></hr>
            <h4>{Beer.abv}</h4>
            <hr></hr>
            <p>{Beer.description}</p>
      </div>
      </Link>
        )
      })}</div>
    </>

  )
}
export default Beers