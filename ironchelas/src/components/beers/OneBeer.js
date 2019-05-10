import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd';

const { Meta } = Card;

function OneBeer() {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers/:id')
      .then(({ data }) => {
        setBeer(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={{marginLeft: "40%"}}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={beer.image_url} style={{width: "100px", height:"60%", marginLeft: "30%"}}/>}
      >
        <Meta
          key={beer._id} title={beer.name}
          description={beer.tagline}
        />
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </Card>
    </div>
  )
}

export default OneBeer