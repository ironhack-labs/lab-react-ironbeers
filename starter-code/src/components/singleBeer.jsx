import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSingleBeer = this.getSingleBeer.bind(this);
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer() {
    const { params } = this.props.match;
    axios
      .get(`http://ih-beers-api.herokuapp.com/beers/${params.id}`)
      .then(responseFromApi => {
        const singleBeer = responseFromApi.data;
        this.setState(singleBeer);
        console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="card-single-beer">
          <div className="img-beer-single">
            <img src={this.state.image_url} />
          </div>
          <div className="beer-info-sinlge">
            <h3>{this.state.name}</h3>
            <h3>{this.state.attenuation_level}</h3>
            <h5>{this.state.tagline}</h5>
            <h5>{this.state.first_brewed}</h5>
            <h5>{this.state.description}</h5>
            <p>{this.state.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
