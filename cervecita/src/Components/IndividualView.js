import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class IndividualView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleBeer() {
    const { params } = this.props.match;
    console.log(params, "params");
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(singleBeer => {
        const theBeer = singleBeer.data;
        this.setState(theBeer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    return (
      <div className="container">
        <div style={{ margin: "200px auto 0 auto", width: "50%" }}>
          <div>
            <img
              height="250px"
              src={this.state.image_url}
              alt="Picture of the beer"
            />
          </div>
          <div className="d-flex justify-content-center">
            <h3>{this.state.name}</h3>
            <p style={{ marginLeft: "30px", color: "grey" }}>
              {this.state.attenuation_level}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <span>{this.state.tagline}</span>
            <span style={{ marginLeft: "30px" }}>
              {this.state.first_brewed}
            </span>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ margin: "30px 0" }}
          >
            <p>{this.state.description}</p>
          </div>
          <div className="d-flex">
            <span>{this.state.contributed_by}</span>
          </div>
          <div className="d-flex">
            <Link to="/beers">Return to the list of beers</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualView;
