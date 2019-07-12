import React, { Component } from "react";
import Header from "../components/Header";
import Axios from "axios";
import OneBeer from "../components/OneBeer";

export default class Beers extends Component {
  state = {
    beers: []
  };
  componentDidMount = () => {
    Axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(beers => this.setState({ beers: beers.data.slice(0, 25) }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.beers);
    const { beers } = this.state;
    return (
      beers && (
        <React.Fragment>
          <Header />

          {this.state.beers.map((oneBeer, i) => (
            <React.Fragment key={i}>
              <OneBeer
                image={oneBeer.image_url}
                name={oneBeer.name}
                tagline={oneBeer.tagline}
                contributor={oneBeer.contributed_by}
                id={oneBeer._id}
              />
              <hr />
            </React.Fragment>
          ))}
        </React.Fragment>
      )
    );
  }
}
