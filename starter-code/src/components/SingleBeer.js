import React, { Component } from "react";
import axios from "axios";
import ListBeers from "./ListBeers";

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { theBeer: {} };
  }

  getTheBeer = () => {
    const { params } = this.props.match;
    console.log(this.props.match);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then(responseApi => {
        const theBeer = responseApi.data;
        this.setState(theBeer);
        console.log("cervejas", responseApi.data);
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getTheBeer();
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
