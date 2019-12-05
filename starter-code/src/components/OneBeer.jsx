import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Card from "./Card";


export default class OneBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: {}
    };
  }
  componentDidMount() {
      axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.beerID).then(beer => {
        console.log(beer);
        this.setState({
          ...this.state,
          beer: beer.data
        });
      });
    }
  

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Card beer={this.state.beer}></Card>
      </React.Fragment>
    );
  }
}
