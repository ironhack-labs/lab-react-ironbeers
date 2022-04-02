import React, { useEffect, useState } from 'react'
import { ramdonBeer } from '../../services/BeerService'

export const RamdonBeer = () => {

  const [loading, setLoading] = useState(true)
  const [beer, setBeerRamdon] = useState(null)

  useEffect(() => {
    ramdonBeer()
    .then( data => {
      setBeerRamdon(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className='RamdonBeer'>
      <h1 className='mb-4 mt-5'>Ramdon Beer</h1>
      <div className='d-flex align-items-center flex-column'>
      {
        loading ? (
          <p className='loading'>Loading...</p>
        ) : (
            <div className='allBeers-beer' key={beer._id}>
              <div className='d-flex align-items-center justify-content-center'>
                <img className='allBeers-beer_img' src={beer.image_url} alt=''></img>
                <div className='allBeers-beer_info'>
                  <p className='title'>{beer.name}</p>
                  <p>{beer.tagline}</p>
                  <p className='secondary-info'>{beer.contributed_by}</p>
                </div>
              </div>
            </div>
          ) 
        }  
      </div>
    </div>
  )
}
