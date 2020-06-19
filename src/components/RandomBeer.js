import React from 'react';
import axios from 'axios';

export default class RandomBeer extends React.Component {
  state = {
    randomBeer: ''
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        this.setState({
          randomBeer: res.data
        })
      })
  }

  render() {
    if (!this.state.randomBeer) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.randomBeer
    return (
      <div>
        <img src={image_url} alt="..." />
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
      </div>
    );
  }
  
}
