import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
    console.log('PROPS:', this.props);
  }

  componentDidMount = () => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log('OneBeer', res.data);
        this.setState({
          beer: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <img src={this.state.beer.image_url} alt="" />
        <h3>{this.state.beer.name}</h3>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>Created By: {this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default Beer;
