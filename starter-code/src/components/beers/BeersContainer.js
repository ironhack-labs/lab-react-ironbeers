import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../styled-components/Card'
import axios from 'axios'

const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers'

class BeersContainer extends Component {
  state = {
    beers: []
  }

  async componentDidMount() {
    const { data } = await axios.get(ENDPOINT)
    this.setState({ beers: [...data] })
  }

  render() {
    const { beers } = this.state
    return (
      <div className="App">
        

          {beers.map(beer => (
            <Card>
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} width="80px" />
              <p>{beer.name} </p>
            </Link>
            </Card>
          ))}
        
      </div>
    )
  }
}

export default BeersContainer
