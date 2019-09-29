import React, { Component } from "react";
import { randomBeer } from "./../services/beer-api";

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.beer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Prev props: ", prevProps.match.params);
    // console.log("Curr props: ", this.props.match.params);
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id || !this.state.beer) {
      randomBeer()
        .then(beer => {
          console.log(beer);
          this.setState({ beer });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const beer = this.state.beer;
    return !this.state.beer ? (
      <div>loading</div>
    ) : (
      <div>
        <img height={200} alt="one beer" src={beer.image_url} />
        <br />
        {beer.name}
        <br />
        {beer.tagline}
        <br />
        {beer.first_brewed}
        <br />
        {beer.attenuation_level}
        <br />
        {beer.description}
        <br />
        {beer.contributed_by}
      </div>
    );
  }
}
