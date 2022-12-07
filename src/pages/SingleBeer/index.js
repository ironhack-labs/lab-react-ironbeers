import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'

const SingleBeer = () => {
  const [beer, setBeer] = useState({})
  const { id } = useParams()
  const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => setBeer(response.data))
      .catch(console.log)
  })

  return (
    <div className='detailsCard'>
      <img 
        src={image_url}
        alt=''
        className='detailImg'
      />

      <div className='titleCard'>
        <div className='nameAndTag'>
            <h1>{name}</h1>
            <h4>{tagline}</h4>
        </div>

        <div className='numbers'>
            <h1>{attenuation_level}</h1>
            <h5>{first_brewed}</h5>
        </div>
      </div>
      
      <div>
        <p>{description}</p>
        <p className='footer'>{contributed_by}</p>
      </div>
    </div>
  )
}

export default SingleBeer