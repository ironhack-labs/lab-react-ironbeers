import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import beersService from '../services/beersService'
import { Link } from 'react-router-dom'


function Beers() {
  const [beers, setBeers] = useState()

  useEffect(() => {
    beersService.list()
      .then((beers) => {
        setBeers((prevBeers) => {
          return beers
        })
        console.log(beers)
      })
      .catch(console.error)

  }, [])

  return (
    <>
      <NavBar />
      {
        !beers ? <><div className='d-flex justify-content-center align-items-center mt-3'>Loading...</div></> : beers.map((beer) => (
          <Link key={beer._id} to={`/beer/${beer._id}`} className='text-decoration-none'>
            <div className='row '>
              <div className='col-12'>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-4 text-center">
                      <img src={beer.image_url} className="img-fluid rounded-start" alt="..." style={{ maxWidth: '100px', maxHeight: '200px' }} />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{beer.name}</h5>
                        <h3 className="card-text text-body-tertiary">{beer.tagline}</h3>
                        <p className="card-text"><b>Created by:</b> <span className="text-body-primary">{beer.contributed_by}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </>
  )
}

export default Beers