import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function SingleBeer(props) {
  const [beer, setBeer] = useState(null)
  let {id} = useParams()

  useEffect(() => {
    if(!props.randomBeer) {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(result => {
        setBeer(result.data)
      })
    }
    else {
      setBeer(props.beer)
    }
  }, [])

  return (
    <div>
      <Header></Header>
      {!beer && <p>Loading...</p>}
      {beer && (
        <div className='singleBeer'>
          <div>
            <img src={beer.image_url} alt='beer pic' />
            <div>
              <div className='singleBeerLeft'>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
              </div>
              <div className='singleBeerRight'>
                <h1>{beer.attenuation_level}</h1>
                <p><small>{beer.first_brewed}</small></p>
              </div>
            </div>
            <p>{beer.brewers_tips}</p>
            <p className='contributed'><small>{beer.contributed_by}</small></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleBeer