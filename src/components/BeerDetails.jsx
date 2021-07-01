import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBeerDetail: [],
      status: 'loading',
    };
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.beerId;
    console.log('beerid', beerId);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log('response', response.data);

        this.setState({
          singleBeerDetail: response.data,
          status: 'loaded',
        });
      })

      .catch((error) => {
        console.log('error', error);
      });
  };

  render() {
    console.log('props', this.props);

    return (
      <div>
        <div>
          <NavBar />
        </div>

        <img
          className="h-44 my-4"
          src={this.state.singleBeerDetail.image_url}
          alt="beer_img"
        />
        <h1 className="text-2xl font-black py-4">
          {this.state.singleBeerDetail.name}
        </h1>
        <p className="py-4">{this.state.singleBeerDetail.tagline}</p>
        <p className="py-3">
          <strong>First brewed:</strong>
          {this.state.singleBeerDetail.first_brewed}
        </p>
        <p className="py-3">
          <strong>Attenuation level:</strong>
          {this.state.singleBeerDetail.attenuation_level}
        </p>
        <p className="py-3 text-justify">
          <strong> Description:</strong>
          {this.state.singleBeerDetail.description}
        </p>
        <p className="py-3">
          <strong>Contributed by:</strong>
          {this.state.singleBeerDetail.contributed_by}
        </p>
      </div>
    );
  }
}

export default BeerDetails;

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
