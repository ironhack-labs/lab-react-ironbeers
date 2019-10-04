import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBeer: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let url = `http://localhost:5000/single/${id}`;
    axios.get(url).then(res => {
      this.setState({ singleBeer: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="beer-detail">
          <img
            src={this.state.singleBeer.image_url}
            alt={this.state.singleBeer.name + " photo"}
          ></img>
          <h1>{this.state.singleBeer.name}</h1>
          <h3>{this.state.singleBeer.tagline}</h3>
          <p>Contributed by: {this.state.singleBeer.contributed_by}</p>
        </div>
      </React.Fragment>
    );
  }
}
