import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./BeerDetail.css";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOneBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(response => {
        // console.log(response.data);
        this.setState(response.data);
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };

  componentDidMount() {
    this.getOneBeer();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="BeerDetail">
          <img
            src={this.state.image_url}
            alt={this.state.name}
            className="image-OneBeer"
          />
          <h2>
            {this.state.name} {this.state.tagline}
          </h2>
          <p>
            {this.state.attenuation_level} {this.state.first_brewed}
          </p>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
