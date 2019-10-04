import React, { Component } from "react";
import axios from "axios";

export default class SingleBeer extends Component {
  constructor(props) {
    super();
    this.state = {
      randomBeer: {}
    }
  }
  // transformName(name) {
  //   const regex = /^\w+\s\w+/;
  //   return name.match(regex);
  // }

  componentDidMount() {
     axios.get("http://localhost:5000/random").then(beer => {
      this.setState({
        ...this.state,
        randomBeer: {...beer.data}
      })
      console.log(this.state.randomBeer)
    })
  }

  render() {
    {console.log(this.state.randomBeer[0])}
    return (
      <div>
        <img src={this.state.randomBeer.image_url} alt="beer bottle" />
        <h2>{this.state.randomBeer.name}</h2>
        {/* <p>{this.state.randomBeer.tagline}</p>
        <h4>Created by: </h4>{" "}
        <p>{this.transformName(this.state.randomBeer.contributed_by)}</p> */}
      </div>
    );
  }
}
