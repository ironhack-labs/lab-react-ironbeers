import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export class BeerDetails extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    const _id = this.props.match.params._id;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
        
      <div>
           <NavBar />
        <div>
          <img
            style={{ width: 50, margin: 30 }}
            src={this.state.beer.image_url}
            alt=""
          />
          <h2>{this.state.beer.name}</h2>
          <span>{this.state.beer.attenuation_level}</span>
          <p>
            <i>{this.state.beer.tagline}</i>
          </p>
          <span>{this.state.beer.first_brewed}</span>
          <p>{this.state.beer.description}</p>
          <p>
            <b>{this.state.beer.contributed_by}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
