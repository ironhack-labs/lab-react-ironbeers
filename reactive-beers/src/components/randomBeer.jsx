import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {

  constructor() {
    super()
    this.state = {
      randomBeer: []
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random")
      .then(response => this.setState({ randomBeer: response.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.randomBeer)
    return (
      <div>
        <Link to="/">Home</Link>

        <h2>Random Beer</h2>
        {this.state.randomBeer.map((beer, idx) => {
          return <div key={idx}>
            <p>Name: {beer.name}</p>
            <img src={beer.image_url} alt='' />
            <p>{beer.tagline}</p>
            <p>Description: {beer.description}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Brewer tips: {beer.brewer_tips}</p>
            <p>First brewed on {beer.first_brewed}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        })}
      </div>
    )
  }
}
