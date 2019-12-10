import React, { Component } from "react";
import Header from "../components/Header";

import { load as loadBeerService } from "./../services/beers";

export class SingleBeerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  async componentDidMount() {
    try {
      console.log(this.props.match);
      const beer = await loadBeerService(this.props.match.params.id);
      console.log(beer);
      this.setState({
        beer
      });
    } catch (error) {
      console.log(error);
      console.log("Error in service.");
    }
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        {beer && (
          <div>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        )}
        <Header />
        <p>this is the single beer view</p>
      </div>
    );
  }
}

export default SingleBeerView;
