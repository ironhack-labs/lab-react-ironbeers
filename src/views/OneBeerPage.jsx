import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default class OneBeerPage extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const beerId = this.props.match.params.id;

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      });
  }

  render() {
    // if (!this.state.beer) {
    //   return <div>Loading.....</div>;
    // }

    return (
      <div>
        <Header />
        <h2>Welcome to the Beer page</h2>
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
    );
  }
}
