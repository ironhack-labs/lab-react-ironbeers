import React, { Component } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import Card from './Card'

export default class Beers extends Component {
  state = {
    fullBeers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({ fullBeers: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { fullBeers } = this.state
    return (
      <div>
        <Navbar />
        {fullBeers.map((beer, i) => {
          return <Card key={i} {...beer} />
        })}
      </div>
    )
  }
}
