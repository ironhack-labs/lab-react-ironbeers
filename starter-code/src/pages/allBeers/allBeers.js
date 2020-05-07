import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Navbar from './../../components/navbar/navbar'

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
        {this.state.listOfBeers.map((elm, idx) => (<p>{elm.name}</p>))}
      </main>
    )
  }
}

export default AllBeers
