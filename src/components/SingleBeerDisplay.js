import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

export default class SingleBeerDisplay extends Component {
  state = {
    beer: null,
  };

  getSingleBeer = () => {
    const singleBeerId = this.props.match.params.singleBeerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${singleBeerId}`)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      });
  };

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    if (!this.state.beer) return <> </>;

    return (
      <>
        <header>
          <Link to="/">
            <img src="/assets/home-white.png" alt="home" />
          </Link>
        </header>
        <div className="beer-container">
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          <div>
            <h2>{this.state.beer.name}</h2>
            <h4>{this.state.beer.tagline}</h4>
          </div>
          <div>
            <h5>{this.state.beer.attenuation_level}</h5>
            <h6>{this.state.beer.first_brewed}</h6>
          </div>
          <div>
            <p>{this.state.beer.description}</p>
            <h6>
              <b>Created by: </b>
              {this.state.beer.contributed_by
                ? this.state.beer.contributed_by.slice(0, 9)
                : ''}
            </h6>
          </div>
        </div>
      </>
    );
  }
}
