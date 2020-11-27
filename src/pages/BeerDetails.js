import React, { useState, useEffect } from 'react'
import { Typography, Skeleton, Divider, Card, Button } from 'antd'
import { getSingleBeer } from '../services/beers'


const { Title } = Typography

function BeerDetails({ match: { params: { beerId } }, history }) {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    async function getBeerDetail() {
      const { data } = await getSingleBeer(beerId)

      setBeer(data)
      console.log(data)
    }

    getBeerDetail()
  }, [])

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Title level={3}>Beer: </Title>
      {beer ? (<div className="div-beerdetails">
        <div style={{margin: 5}}>
        <img style={{height: 200, width: 100}} src={beer.image_url}></img>
        </div>
        <div style={{margin: 5}}>
            <Title level={2}>{beer.name}</Title>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
        <br />
      </div>) : (
          <Skeleton active />
        )}
    </div>
  )
}

export default BeerDetails
