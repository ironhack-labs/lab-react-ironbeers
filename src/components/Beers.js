import React, { Component } from 'react'
import BeerServices from '../service/beer-service'
import Card from '../components/Card'

class BeersList extends Component {

  constructor() {
      super()
      this.state = { beers: [] }
      this.services = new BeerServices()
  }

  componentDidMount() {
      this.services.getAllBeers()
          .then(allBeers => this.setState({ beers: allBeers }))
  }

  render() {
      console.log(this.state.beers)
      return (
          <div className="container">
              <h1>Sevesas</h1>
              <div className="row">
                {this.state.beers.map((beer, idx) => <Card key={idx} {...beer} />)}
              </div>
          </div>
      )
  }
}

export default BeersList