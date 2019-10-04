import React, { Component } from 'react'
import HomeLink from './HomeLink'
import picture1 from './../images/beers.png'
import picture2 from './../images/random-beer.png'
import picture3 from './../images/new-beer.png'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="homeItems">
        <HomeLink target={'/allBeers'} img={picture1} title="All beers"></HomeLink>
        <HomeLink target={'/randomBeer'} img={picture2} title="Random beer"></HomeLink>
        <HomeLink target={'/newBeer'} img={picture3} title="New beer"></HomeLink>
      </div>
    )
  }
}
