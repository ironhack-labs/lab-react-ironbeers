import React, { Component } from "react";
import axios from "axios";

import Header from "./Header.js";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)

      .then(responseFromApi => {
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <img src={this.state.image_url} alt="" style={{ height: "200px" }} />
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.tagline}</p>
            <p>{this.state.attenuation_level}</p>
            <p>{this.state.first_brewed}</p>

            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
