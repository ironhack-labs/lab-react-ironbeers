import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import "./style.css";

export default class SingleBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    const requestString = this.props.match.params.id
      ? this.props.match.params.id
      : "random";
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${requestString}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { beer } = this.state;
    console.log(this.props);
    return (
      <div>
        <HomeHeader />

        <div className="beers-container">
          {beer && (
            <div>
              <div className="single-beers-images">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <div>{beer.name}</div>
                <div>{beer.attenuation_level}</div>
              </div>
              <div>
                <div>{beer.tagline}</div>
                <div>{beer.first_brewed}</div>
              </div>
              <div>{beer.description}</div>
              <div>{beer.contributed_by}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
