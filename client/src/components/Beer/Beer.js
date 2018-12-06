import React, { Component } from "react";
import axios from "axios";

import { StyledImg } from "./Beer.styled";

export default class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: {}
    };
  }
  getBeer = url => {
    return axios
      .get(`https://ironbeer-api.herokuapp.com/beers/${url}`)
      .then(beer =>
        this.setState({
          ...this.state,
          beer: (this.props.match.params.id) ? beer.data : beer.data[0]
        })
      )
      .catch(err => console.log(err));
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      this.getBeer(`single/${this.props.match.params.id}`);
    } else {
      this.getBeer("random");
    }
  }

  render() {
      console.log(this.state.beer)
    return (
      <React.Fragment>
        <StyledImg
          src={this.state.beer.image_url}
          alt={`${this.state.beer.name}__image`}
        />
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </React.Fragment>
    );
  }
}
