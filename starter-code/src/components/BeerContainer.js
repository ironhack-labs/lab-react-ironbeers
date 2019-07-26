import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function BeerContainer() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        setBeers(prevState => {
          return [...prevState, ...data]
        })
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(beers)
  return (
    <div>
      {beers.map((beer, i) => (
        <div key={i} style={{ display: 'flex', width: '50vw', border: 'solid 1px gray' }}>
          <img style={{ width: '50px' }} src={beer.image_url} alt="" />
          <div>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
