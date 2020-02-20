import React, { Component } from "react";
import apiHandler from "./../api/Handler";

const api = new apiHandler();

export default class SingleBeer extends Component {
  state = {
    beer: ""
  };

  componentDidMount() {
    api
      .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(apiRes => this.setState({ beer: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    const { beer } = this.state;

    console.log(this.props, this.state);

    return beer ? (
      <>
        <h1 className="title">Beer details</h1>
        <h2 className="beer-name">{beer.name}</h2>
        <img src={beer.image_url} alt="" />
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>

      </>
    ) : (
        <p>... loading</p>
      );
  }
}

