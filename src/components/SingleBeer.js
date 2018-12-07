import React, { Component } from "react";
import axios from "axios";

class SingleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/single/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({ info: response.data });
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  }

  render() {
    let { info } = this.state;
    if (this.state.info) {
      return (
        <div>
          <h2>Beer Details</h2>
          <img src={info.image_url} />
          <h3>{info.name}</h3>
          <p>{info.tagline}</p>
          <p>Made in: {info.first_brewed}</p>
          <p>Attenuation level: {info.attenuation_level}</p>
          <p>{info.description}</p>
          <p>Contributed by: {info.contributed_by}</p>
          <ul />
        </div>
      );
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default SingleBeer;
