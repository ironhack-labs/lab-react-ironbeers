import React, { Component } from 'react'
import Card from './Card'
import beersImg from '../../img/beers.png'
import randomBeerImg from '../../img/random-beer.png'
import newBeerImg from '../../img/new-beer.png'

const info = [
  {
    name: 'All beers',
    description: 'lorem sakdn saodjas dosadn sadonsad asdo dsakbdaobsd',
    imageUrl: beersImg,
    url: '/beers'
  },
  {
    name: 'Random Beer',
    description: 'lorem sakdn saodjas dosadn sadonsad asdo dsakbdaobsd',
    imageUrl: randomBeerImg,
    url: '/randombeer'
  },
  {
    name: 'New beer',
    description: 'lorem sakdn saodjas dosadn sadonsad asdo dsakbdaobsd',
    imageUrl: newBeerImg,
    url: '/newbeer'
  }
]

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        {info.map((el, i) => {
          return (
            <Card
              name={el.name}
              description={el.description}
              imageUrl={el.imageUrl}
              key={i}
              url={el.url}
            />
          )
        })}
      </div>
    )
  }
}
