import React, { Component } from 'react'
import BeersServices from '../service/beers-services'
import Header from '../components/header'
import Card from '../components/card'


class Beers extends Component {

  constructor() {
    super()
    this.state = { beers: [] }
    this.services = new BeersServices()
  }


  componentDidMount() {
    this.services.getAllBeers()
      .then(allBeers => {
        this.setState({ beers: allBeers })
      })
  }


  render() {
    return (

      <div className="container">

        <Header />

        <div className="row coaster-list">

          {this.state.beers.map((beer, idx) => <Card baseUrl={'beer-details'} key={idx} {...beer} />)}

        </div>

      </div>
    )
  }
}



export default Beers