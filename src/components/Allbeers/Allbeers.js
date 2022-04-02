import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllbeers } from '../../services/BeerService'
import './Allbeers.css'

export const Allbeers = () => {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllbeers()
      .then( data => {
        setBeers(data)  
        setLoading(false) 
        console.log(data)     
      })
  }, [])

  return (
    <div>
      <h1 className='mb-4 mt-5'>Allbeers</h1>
      <div className='d-flex align-items-center flex-column'>
        {
          loading ? (
            <p className='loading'>Loading...</p>
          ) : (
            beers.map( beer => {
              const { image_url, name, tagline, contributed_by } = beer
              return (
                <div className='allBeers-beer' key={beer._id}>
                  <Link to={`/allBeers/${beer._id}`}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img className='allBeers-beer_img' src={image_url} alt=''></img>
                      <div className='allBeers-beer_info'>
                        <p className='title'>{name}</p>
                        <p>{tagline}</p>
                        <p className='secondary-info'>{contributed_by}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }) 
          )
        }
      </div>
    </div>
  )
}
