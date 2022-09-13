import React from 'react'
import HomeButton from '../../components/home-button/HomeButton'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './BeersScreen.css'

export default function BeersScreen() {
  const [beers, setBeers] = useState ([])

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log('res.data', res.data)
        setBeers(res.data)
      })
  }, [])

  return (
    <>
      <HomeButton />

      <ul className='list-group'>
        {beers.map((beer) => (
            <Link className='m-2' key={beer._id} to={`/beers/${beer._id}`}>
              <li className='list-group-item d-flex' key={beer._id}>
                <div>
                  <img className='img-size' src={beer.image_url} alt="" />
                </div>
                <div>
                  <h2>{beer.name}</h2>
                  <h4 className='text-secondary'>{beer.tagline}</h4>
                  <p><strong>Created by:</strong>{beer.contributed_by} </p>
                </div>
              </li>
            </Link>
          ))}

      </ul>    
    </>
  )
}
