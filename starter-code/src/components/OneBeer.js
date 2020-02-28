import React, { Component } from 'react'
import Header from "./Header.js";
import axios from "axios";
import FullCard from "./FullCard";

export default class OneBeer extends Component {

  state = {
      oneBeer: {}
    };
  

  getOneBeer(){
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${
          this.props.match.params.id
        }`
      )
      .then(e => {
        this.setState({
          oneBeer: e.data
        });
      });
  };

  componentDidMount() {
    this.getOneBeer();
  }
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>

        <div>
          <FullCard data={this.state.oneBeer} />
        </div>
      </div>
    );
  }
}