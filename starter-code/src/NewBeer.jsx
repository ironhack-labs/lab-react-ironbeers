import React, { Component } from "react";
import Axios from "axios";

export class NewBeer extends Component {
  constructor() {
    super();
    this.handleFormSubmission = this - this.handleFormSubmission.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleFormSubmission(e) {
    console.log(e);
  }

  handleInput(event) {
    console.log(event.target.value);
    if (event.target.name === "BeerName") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "Description") {
      this.setState({ description: event.target.value });
    }
  }

  postBeers = () => {
    Axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      this.state
    ).then(res => console.log("hi", res));
  };

  /* 
  getBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(res => {
      this.setState({
        beers: res.data
      });
    });
  }; */

  render() {
    return (
      <div>
        <h1>New Beer</h1>

        <input onChange={this.handleInput} name="BeerName" type="text" />
        <input onChange={this.handleInput} name="Description" type="text" />
        <button onClick={event => this.handleFormSubmission(event)}>
          Submit
        </button>
      </div>
    );
  }
}

export default NewBeer;
