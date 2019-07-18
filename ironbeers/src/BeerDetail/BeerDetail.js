import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeBtn from "../HomeBtn/HomeBtn";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    console.log(this.props);
    axios
      .get(`http://localhost:5000/single/${params.id}`)
      .then(responseFromApi => {
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="one">
        <HomeBtn />
        <h1>{this.state.name}</h1>
        <img
          style={{ width: "100px", height: "200px" }}
          src={this.state.image_url}
          alt={this.state.name}
        />
        <p>{this.state.tagline}</p>
      </div>
    );
  }
}

export default BeerDetail;
