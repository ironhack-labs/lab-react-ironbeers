import React, { Component } from 'react'
import CardComponent from './CardComponent'

const directions = [
  { title: 'All Beers', description: 'All beers', url: '/beers', image: 'https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/beers.png' },
  { title: 'Random Beer', description: 'Lorem ipsum dolor', url: '/beers/random', image: 'https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/new-beer.png' },
  { title: 'Create One Beer', description: 'Create one beer', url: '/beers/new', image: 'https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/random-beer.png' }
]

class HomeContainer extends Component {
  render() {
    return (
      <div style={{marginLeft: "40%"}}>
        {directions.map((e, i) => (
          <CardComponent key={i} title={e.title} description={e.description} url={e.url} image={e.image} />
        ))}
      </div>
    )
  }
}

export default HomeContainer
