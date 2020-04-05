import React from "react";
import "../styling/BeerDetail.css";
import axios from "axios";

import Navbar from "../components/Navbar";

export class BeerDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    const selectedBeer = this.props.match.params.id;
    axios
      .get(`https://ih-beers-api.herokuapp.com/beers/${selectedBeer}`)
      .then(response => {
        console.log("one beer response: ", response);
        this.setState({ beer: response.data });
        console.log("BLABLA", this.state.beer)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <img src={this.state.beer.image_url} alt="Beer"/>

          <div>
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.attenuation_level}</p>
          </div>

          <div>
            <p>{this.state.beer.tagline}</p>
            {/* <p>{this.state.beer.first_brewed}</p> */}
          </div>

          <div>
            <p>{this.state.beer.description} </p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
