import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Beers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => setBeers(response.data))
      .catch(console.log)
  }, [])

  return (
    <div>
      {beers.map(({image_url, name, tagline, contributed_by, _id}) => {
        return (
          <div className='beerCard' key={_id}>
            <Link to={`/beers/${_id}`}>
              <div className='imageCard'>
                <img src={image_url} alt='' />
              </div>
            </Link>

            <div className='textCard'>
              <h1>{name}</h1>
              <h4>{tagline}</h4>
              <p>{contributed_by}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Beers