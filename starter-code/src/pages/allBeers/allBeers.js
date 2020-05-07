import React, { Component } from 'react'
import axios from 'axios'

import './allBeers.css'

import Navbar from './../../components/navbar/navbar'
import BeerCard from './../../components/beerCard/beerCard'

import { Link } from 'react-router-dom'

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
          <Link to={`/beers/${elm._id}`}>
            <BeerCard
              key={idx}
              name={elm.name}
              tagline={elm.tagline}
              image={elm.image_url}
              contributedBy={elm.contributed_by}
            />
          </Link>
        ))}
      </main>
    )
  }
}

export default AllBeers
