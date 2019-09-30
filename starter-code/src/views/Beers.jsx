import React, { Component } from "react";

import Navbar from "./../components/Navbar";

import { beerList } from "./../services/beers-api";

export default class Beers extends Component {
  // The code below needs to be finished and tested

  componentDidMount() {
    beerList()
      .then(beerList => {
        this.setState({
          beerList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          ad. Quasi obcaecati reiciendis maxime blanditiis ea. Soluta odit
          doloremque perspiciatis non sint, blanditiis eius veniam omnis
          consequuntur praesentium debitis ad view.
        </p>
      </div>
    );
  }
}
