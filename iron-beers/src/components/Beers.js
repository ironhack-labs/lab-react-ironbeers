import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'
import CardBeer from './CardBeer'
import axios from 'axios'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(allBeers => this.setState({ beers: allBeers.data }))
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.beers.slice(0, 5).map((beer, idx) => {
          return <CardBeer {...beer} key={idx} />
        })}
      </div>
    )
  }
}

export default Home
