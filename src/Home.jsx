import React, { Component } from 'react'
import Card from './Card'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Card title={'All Beers'} image={'/images/beers.png'} link={'/all-beers'}/>
        <Card title={'Random Beer'} image={'/images/random-beer.png'} link={'/random-beer'}/>
        <Card title={'New Beer'} image={'/images/new-beer.png'} link={'/new-beer'}/>
      </div>
    )
  }
}
