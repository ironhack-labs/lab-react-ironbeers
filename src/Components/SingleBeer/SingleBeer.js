import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import axios from '../../axios/axiosinstance'

function SingleBeer() {
  const [beer, setBeer] = useState({})
  const [error, setError] = useState('')
  const [isRandom, setIsRandom] = useState(false)

  const [loading, setLoading] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    setLoading(true)
    let endpointToCall = '';
    if (id) {
      endpointToCall = `/${id}`
      setIsRandom(false)
    } else {
      endpointToCall = '/random';
      setIsRandom(true)
    }
    axios.get(endpointToCall)
      .then(data => {
        setBeer({ ...data.data })
        setLoading(false)
      })
      .catch(error => {
        setError("Not Found or some internal ServeSide Error. check the console")
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className="singleBeer">
      {error}
      {loading && <h1>Loading  .....</h1>}

      <img src={beer.image_url} alt={beer.name} />
      <div className="singleBeerInfo">
        <div className="headerInfo">
          <h1>{`${isRandom? "A Random beer" :''}  : ${beer.name}`}</h1>
          <h4>{beer.tagline}</h4>
          <p>{beer['attenuation_level']}</p>
          <p>{beer['first_brewed']}</p>
        </div>
        <p className="bodyInfo">
          {beer.description}
        </p>
      </div>

    </div>

  )
}

export default SingleBeer

