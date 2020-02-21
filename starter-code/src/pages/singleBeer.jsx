import React, { Component } from "react";
import axios from "axios";

export default class singleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: ""
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id, this.props.match);
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(beer => {
      this.setState({
        beer: beer.data
      });
    });
  }

  render() {
    const beer = this.state.beer;
    console.log(beer);
    return (
      <div className="container detail">
        <div className="col">
          <div className="row justify-content-center">
            <img className="col-3 p-3" src={beer.image_url} alt="" />
          </div>
          <div className="row mb-2">
            <div className="h2 col-9">{beer.name}</div>
            <div className="col-3 h2">{beer.attenuation_level}</div>
          </div>
          <div className="row mb-2">
            <div
              className="col-9 secondary font-weight-bold"
              style={{ color: "gray" }}
            >
              {" "}
              {beer.tagline}
            </div>
            <div className="col-3 font-weight-bold"> {beer.first_brewed}</div>
          </div>
          <div className="row mb-2">
            <div className="col-12">{beer.description}</div>
          </div>

          <div className="row font-weight-bold">
            <div className="col-12" style={{ color: "gray" }}>
              {beer.contributed_by}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
