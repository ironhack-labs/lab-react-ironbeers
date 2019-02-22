import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Section from '../Section'
import Header from '../Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="h1_title"><span>🍺</span>Ironbeers</h1>
        <Section img="/img/rhett-wesley-479644-unsplash.jpg" section="All beers" linkId="/beers" />
        <Section img="/img/eeshan-garg-263528-unsplash.jpg" section="Random beer" linkId="/random" />
        <Section img="/img/sydney-rae-435583-unsplash.jpg" section="New beer" linkId="/new-beer" />
      </div>
    )
  }
}
