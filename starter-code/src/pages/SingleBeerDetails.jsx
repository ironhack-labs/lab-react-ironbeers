import React, { Component } from "react";
import apiHandler from "../apiHandler";
const api = new apiHandler();

export default class SingleBeerDetails extends Component {
  state = {
    beer: {}
  };

  async componentDidMount() {
    let { endpoint } = this.props;
    const apiEndpoint = endpoint === "/random" ? endpoint : "/" + this.props.match.params.id;
    try {
      const res = await api.get(apiEndpoint);
      this.setState({
        beer: res.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beer;
    return !this.state.beer ? (
      <p>Beer is loading...</p>
    ) : (
      <div className="row">
        <div className="col">
          <img src={image_url} alt="" className="mx-auto d-block mb-3 beer-details" />
          <h1 className="h3">{name}</h1>
          <h2 className="h4">{tagline}</h2>
          <em>{first_brewed}</em>
          <em>{attenuation_level}</em>
          <p>{description}</p>
          <em>{contributed_by}</em>
        </div>
      </div>
    );
  }
}
