import React from 'react'
import { Card } from 'antd'

function BeerCard({ beer }) {
  return (
    <div style={{ width: '70%', marginLeft: '15%' }}>
      <Card style={{ display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 20 }}>
            <img src={beer.image_url} height="200vh" alt=""></img>
          </div>
          <div style={{ marginLeft: 60, marginTop: 50 }}>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <small>
              <b>Created by:</b> {beer.contributed_by}
            </small>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default BeerCard
