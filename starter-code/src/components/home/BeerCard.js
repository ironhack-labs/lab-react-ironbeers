import React from 'react'
import { Card } from 'antd'

function BeerCard({ beer }) {
  return (
    <div>
      <Card>
        <div>
          <div>
            <img src={beer.image_url} height="200vh" alt=""></img>
          </div>
          <div>
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
