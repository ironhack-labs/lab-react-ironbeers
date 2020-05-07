import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './../../components/navbar/navbar'
import BeerCard from './../../components/beerCard/beerCard'

class AllBeers extends Component {
  constructor() {
    super()
    this.state = { listOfBeers: [] }
  }

  getAllBeers() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ listOfBeers: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getAllBeers()
  }

  render() {
    return (
      <main>
        <Navbar />
        {this.state.listOfBeers.map((elm, idx) => (
          <BeerCard
            key={idx}
            name={elm.name}
            image={elm.image_url}
            contributedBy={elm.contributed_by}
          />
        ))}
      </main>
    )
  }
}

export default AllBeers
