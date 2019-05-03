import React from 'react';
import axios from "axios";
import Navbar from './Navbar';

class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/random`)
      .then(randomBeersPayload => {
        const randomBeer = randomBeersPayload.data
        this.setState({
          ...this.state,
          beer: randomBeer
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <img src={this.state.beer.image_url} alt='' />
          <p>{this.state.beer.name}</p>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default RandomBeer;