import React, { Component } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

class BeerDetail extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentWillMount() {
    const base_url = "https://ironbeer-api.herokuapp.com/beers/single";
    const { id } = this.props.match.params;
    axios.get(`${base_url}/${id}`).then(res => {
      this.setState({ beer: res.data });
    });
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <Nav />
        <div>
          <img src={beer.image_url} alt="cerveza" style={{ maxWidth: "18%" }} />
          <h1>{beer.name}</h1>
          <p>{beer.attenuation_level}</p>
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
