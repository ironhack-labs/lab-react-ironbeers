import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header';

const Beers = () => {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => {
      setBeers(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      <Header />

      {
        beers.map(beer => (
          <div className="row" key={beer._id}>
            <div className='col-md-4'>
              <img src={beer.image_url} style={{height: "200px"}} alt={beer.name} />
            </div>
            <div className='col-md-8 d-flex flex-column text-start'>
              <h2><Link to={`beers/${beer._id}`}>{beer.name}</Link></h2>
              <h5 className='text-secondary'>{beer.tagline}</h5>
              <h6><span className='fw-bold'>Created by: </span>{beer.contributed_by}</h6>
            </div>
            <br /><hr /><br />
          </div>
        ))
      }
    </div>
  )
}

export default Beers