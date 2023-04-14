import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import beersService from '../services/beersService'

function Beer() {
  const { id } = useParams()
  const [beer, setBeer] = useState()

  useEffect(() => {
    beersService.beer(id)
      .then((beer) => {
        console.log(beer)
        setBeer((prevBeer) => {
          return beer
        })
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <NavBar />
      {
        !beer ? <><div className='d-flex justify-content-center align-items-center mt-3'>Loading...</div></> :
          <div className='row'>
            <div className='col-12'>
              <div className="card d-flex justify-content-center align-items-center pt-4" style={{ width: '100%' }}>
                <img src={beer.image_url} className="card-img-top" alt="..." style={{ width: '50%' }} />
                <div className="card-body">
                  <div className='row'>
                    <div className='col-9'>
                      <p className="card-title fs-1">{beer.name}</p>
                    </div>
                    <div className='col-3'>
                      <p className="card-title fs-1 text-end text-black-50">{beer.attenuation_level}</p>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='col-9 text-black-50 fs-5'>{beer.tagline}</div>
                    <div className='col-3 text-end'><b>{beer.first_brewed}</b></div>
                  </div>
                  <p className="card-text">{beer.description}</p>
                  <b className="card-text text-body-tertiary">{beer.contributed_by}</b>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Beer