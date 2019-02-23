import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourBeer: null
    }
  }

  componentDidMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.beerId}`)
      .then((response) => {
        this.setState({ ourBeer: response.data })
        console.log(response.data)
      })
  }

  render() {
    if (!this.state.ourBeer) {
      return (
        <div>
          <Header />
          <h2 className="text-center">Beer Loading...</h2>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <img className="beer-image" src={this.state.ourBeer.image_url}/>
        <p>{this.state.ourBeer.name}</p>
        <p>{this.state.ourBeer.tagline}</p>
        <p>{this.state.ourBeer.first_brewed}</p>
        <p>{this.state.ourBeer.attenuation_level}</p>
        <p>{this.state.ourBeer.description}</p>
        <p>{this.state.ourBeer.contributed_by}</p>

      </div>
    )
  }
}
