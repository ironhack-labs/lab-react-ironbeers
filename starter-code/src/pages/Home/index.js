import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MenuCards from "./MenuCards";

export default class Home extends Component {

  render () {
    return (
      <>
        <MenuCards
          image = "./images/beers.png"
          name = "All beers"
          route = "/all-beers"
        />
        <MenuCards
          image = "./images/new-beer.png"
          name = "Random Beer"
          route = "/random"
        />
        <MenuCards
          image = "./images/random-beer.png"
          name = "New Beer"
          route = "/new"
        />
      </>
    );
  }
}