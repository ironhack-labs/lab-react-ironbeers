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
        console.log("BLABLA", this.state.beer);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="column">
          <div className=" beer-detail">
            <img src={this.state.beer.image_url} alt="Beer" />

            <div className="row">
              <h2 className="col-9 text-left">{this.state.beer.name}</h2>
              <p className="col-3">{this.state.beer.attenuation_level}</p>
            </div>

            <div className="row">
              <p className="col-12 text-left">{this.state.beer.tagline}</p>
              {/* <p>{this.state.beer.first_brewed}</p> */}
            </div>

            <div>
              <p className="text-left">{this.state.beer.description} </p>
              <p className="text-left">{this.state.beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
