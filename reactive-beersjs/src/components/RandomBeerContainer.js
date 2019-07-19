import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
export default class RandomBeerContainer extends Component {

  state = {
    randomBeer: {}
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(({ data }) => {
        this.setState({ randomBeer: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const {randomBeer} = this.state
    return (
      <div>
      <Header />
      <div className="beer-detail">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <div className="randomBeer-detail-name">
          <div>
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
          </div>
          <div>
            <small> <b>{randomBeer.first_brewed}</b> </small>
            <small> {randomBeer.attenuation_level} </small>
          </div>
        </div>
        <p> {randomBeer.description} </p>
        <small> {randomBeer.contributed_by} </small>
      </div>
    </div>
    )
  }
}

