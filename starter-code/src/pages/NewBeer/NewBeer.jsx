import React, { Component } from "react";
import NewBeerForm from "./../../components/NewBeerForm/NewBeerForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class NewBeer extends Component {
  constructor(props) {
    super()
    this.state = {
      beerCreated: false,
      beerID: ''
    }
  }
  
  createBeer(formData) {
    axios.post("http://localhost:5000/new", formData).then(beerAdded => {
      this.setState({
        beerCreated: true,
        beerID: beerAdded.data._id
      })
    });
  }

  render() {
    if (this.state.beerCreated) return <Redirect to={{pathname: `/view/${this.state.beerID}`}} />
    return (
      <div>
        <h1>Hello, I am the New beer site</h1>
        <NewBeerForm createBeer={formData => this.createBeer(formData)} />
      </div>
    );
  }
}
