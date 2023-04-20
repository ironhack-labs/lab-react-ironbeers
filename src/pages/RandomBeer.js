import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from '../components/Header';

const RandomBeer = () => {

  const [beer, setBeer] = useState(null)

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(res => {
      setBeer(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      <Header />

      {
        beer &&
          <div className="row pt-5">
            <div className='d-flex justify-content-center'>
              <img src={beer.image_url} style={{height: "300px"}} alt={beer.name} />
            </div>
            
            <div className='col-md-8 d-flex flex-column p-5'>
              <div className='d-flex justify-content-between pb-2'>
                <h1>{beer.name}</h1>
                <h3>{beer.attenuation_level}</h3>
              </div>
              <div className='d-flex justify-content-between pb-2'>
                <h5 className='text-secondary'>{beer.tagline}</h5>
                <h6 className='fw-bold'>{beer.first_brewed}</h6>
              </div>
              <div className='text-start '>
                <p>{beer.description}</p>
                <h6 className='text-secondary'>{beer.contributed_by}</h6>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default RandomBeer