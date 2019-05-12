import React, { Component } from 'react'
import { Card, Button } from 'antd'
import CardComponent from './CardComponent'

const directions = [
  {title: 'All Beers', description: 'See All Beers', url: '/all-beers' },
  {title: 'Random Beer', description: 'See a random beer', url: '/random-beer' },
  { title: 'Add New Beer', description: 'Add a new Beer', url: '/new-beer' }

]

class HomeContainer extends Component {
  render(){
    return (
      <div>
        <h1>Home</h1>
        {directions.map((e,i) => (
          <CardComponent key = {i} title={e.title} description = {e.description} url={e.url} />
        ))}
      </div>
    )
  }
}


export default HomeContainer