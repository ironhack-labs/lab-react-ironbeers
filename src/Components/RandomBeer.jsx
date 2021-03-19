import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import '../Styles/OneBeer.css';

export class RandomBeer extends Component {
  state = {
    beers: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.beers === null) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="theBeer">
        <Header />
        <article>
          <div id="image">
            <img src={this.state.beers.image_url} alt="image" />
          </div>
          <div className="title">
            <h1>{this.state.beers.name}</h1>
            <h2>{this.state.beers.attenuation_level}</h2>
          </div>
          <div className="title">
            <p className="tagline">{this.state.beers.tagline}</p>
            <p className="date">{this.state.beers.first_brewed}</p>
          </div>
          <p id="description">{this.state.beers.description}</p>
          <p id="creator">{this.state.beers.contributed_by}</p>
        </article>
      </div>
    );
  }
}

export default RandomBeer;
