import React, { Component } from 'react'
import axios from 'axios'

class BeerDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const { params, path } = this.props.match

    if(path === '/beers/:id') {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then(response => this.setState({ beer: response.data }))
      .catch(error => console.log(error))
    } else {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => this.setState({ beer: response.data }))
      .catch(error => console.log(error))
    }
  }
  
  render() {
    const { beer } = this.state
    return (
      <div className="beer-details">

        <div className="beer-card">
          <figure>
            <img src={beer.image_url} alt={beer.name} width="100%" />
          </figure>
          <div className="sides">
            <div className="left">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
            </div>
            <div className="right">
              <h2>{beer.attenuation_level}</h2>
              <p>{beer.first_brewed}</p>
            </div>
          </div>
          <div className="info">
            <p>{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerDetails
