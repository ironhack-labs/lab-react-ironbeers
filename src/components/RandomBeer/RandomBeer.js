import React from 'react'
import Navbar from '../Navbar/Navbar'

function RandomBeer({ beers }) {
  const keys = Object.keys(beers)
  let randomBeer = keys[Math.floor(Math.random() * keys.length)]

  return (
    <>
      <Navbar />
      <div className='d-flex flex-column p-3'>
        <div className='text-center'>
          <img src={beers[randomBeer].image_url} alt={beers[randomBeer].name} width={50} />
        </div>
        <div className='mt-2 d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <p><b>{beers[randomBeer].name}</b></p>
            <span style={{color: 'gray'}} className='mx-5'>{beers[randomBeer].attenuation_level}</span>
          </div>
          <div className='d-flex justify-content-between'>
            <p style={{color: 'gray'}}>{beers[randomBeer].tagline}</p>
            <span className='mx-5'><b>{beers[randomBeer].first_brewed}</b></span>
          </div>
          <p>{beers[randomBeer].description}</p>
          <p style={{color: 'gray'}}>{beers[randomBeer].contributed_by}</p>
        </div>
      </div>
    </>
  )
}

export default RandomBeer