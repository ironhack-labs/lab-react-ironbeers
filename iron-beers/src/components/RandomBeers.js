import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'


import axios from 'axios'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: []

    }
  }


  componentDidMount() {

    axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(theBeer => {
        console.log(theBeer.data)
        this.setState({ beer: theBeer.data })
      })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="beer-detail">
          <img src={this.state.beer.image_url} alt="beer" />
          <div className="beer-detail-info">
            <h2>{this.state.beer.name}</h2>
            <div className="beer-detail-text">
              <p>{this.state.beer.tagline}</p>
              <p>{this.state.beer.contributed_by}</p>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>{this.state.beer.contributed_by}</p>
            </div>
            <Link to={'/'}>Go Back!</Link>
            <Link to={'/random-beer'}>Another!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
