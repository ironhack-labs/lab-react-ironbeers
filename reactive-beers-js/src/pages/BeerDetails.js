import React, { Component } from "react";
import Header from "../components/Header";
import Axios from "axios";
import OneBeer from "../components/OneBeer";

export default class BeerDetails extends Component {
  state = {
    beer: null
  };
  componentDidMount = () => {
    console.log(this.props);

    Axios.get(
      `https://ih-beer-api.herokuapp.com/beers/${this.props.match.params._id}`
    )
      .then(beer => this.setState({ beer: beer.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.beer);
    const { beer } = this.state;
    return (
      beer && (
        <div>
          <Header />
          <OneBeer
            image={this.state.beer.image_url}
            name={this.state.beer.name}
            tagline={this.state.beer.tagline}
            contibutor={this.state.beer.contributed_by}
            firstBrewed={this.state.beer.first_brewed}
            level={this.state.beer.attenuation_level}
            description={this.state.beer.description}
            id={this.state.beer._id}
          />
        </div>
      )
    );
  }
}
