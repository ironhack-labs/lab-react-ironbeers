import React, { Component } from "react";
import axios from "axios";
class SingleBeer extends Component {
  state = { singleBeer: {} };
  componentDidMount() {
    this.fetchBeer();
  }

  fetchBeer = async () => {
    try {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      this.setState({ singleBeer: data });
    } catch (e) {
      console.log("Error fetching beers", e);
    }
  };
  render() {
    const { singleBeer } = this.state;
    return (
      <div>
        <img src={singleBeer.image_url} alt="beer" />
        <p>{singleBeer.name}</p>
        <p>{singleBeer.tagline}</p>
        <p>{singleBeer.first_brew}</p>
        <p>{singleBeer.attenuation_level}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;
