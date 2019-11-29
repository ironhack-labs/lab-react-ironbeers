import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Beers from "./Beers";

class BeerDetail extends React.Component {
  state = {
    beer: []
  };

  componentDidMount() {
    console.log("did  mount");
    const props = this.props;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        // console.log(response.data.name);

        // console.log("Hellllloooo", props);

        this.setState({
          beer: response.data
        });
        console.log(this.state.beer);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(this.state.beer);
  }

  // componentDidMount() {
  //   this.getBeerData();
  // }

  componentDidUpdate(prevProps) {
    console.log("PREVPROPS: ", prevProps);
    console.log("CURRENT PROPS: ", this.props);
    // if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
    if (prevProps !== this.props) {
      this.componentDidMount();
    }
  }

  render() {
    console.log("did render");
    const beer = this.state.beer;
    console.log(this.state.beer);
    return (
      <div style={{ listStyle: "none" }}>
        <li>
          <img
            style={{ height: "100px" }}
            src={beer.image_url}
            alt="berr pic"
          />
        </li>
        <li>{beer.name}</li>
        <li>{beer.tagline}</li>
        <li>{beer.first_brewed}</li>
        <li>{beer.attenuation_level}</li>
        <li>{beer.description}</li>
        <li>{beer.contributed_by}</li>
      </div>
    );
  }
}

export default BeerDetail;
