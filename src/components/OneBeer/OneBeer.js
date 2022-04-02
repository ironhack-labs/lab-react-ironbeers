import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { oneBeer } from '../../services/BeerService'

export const OneBeer = () => {
  const { id } = useParams()

  const [beer, setBeer] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    oneBeer(id)
      .then( data => {
        setBeer(data)
        setLoading(false) 
        console.log(data)
      })
  }, [])

  return (
    <div>
      <h1 className='mb-4 mt-5'>One Beer</h1>  
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
