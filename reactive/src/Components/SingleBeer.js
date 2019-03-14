import React from "react";
import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class SingleBeer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {
    this.getSingleBeer();
  }
  getSingleBeer = () => {
    const { params } = this.props.match;
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
    .then(responseFromAPI => {
      const theBeer = responseFromAPI.data;
      this.setState(theBeer);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render () {
    return (
      <div>
        <Navbar />
        <ul>
          <li><img src={this.state.image_url}></img></li>
          <li>{this.state.name}</li>
          <li>{this.state.tagline}</li>
          <li>{this.state.first_brewed}</li>
          <li>{this.state.attenuation_level}</li>
          <li>{this.state.description}</li>
          <li>{this.state.contributed_by}</li>
        </ul>
      </div>
    )
  }
}

export default SingleBeer;