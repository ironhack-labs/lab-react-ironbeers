import React, { Component } from "react";
import axios from "axios";

export default class Beer extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    if (this.props.match.params.beerId) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => {
          this.setState({
            beer: res.data.find(beer => {
              return beer._id === this.props.match.params.beerId;
            })
          });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(res => {
          this.setState({
            beer: res.data
          });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    if (this.state.beer === null) {
      return <div />;
    }
    const beer = this.state.beer;
    return (
      <div>
        <div style={{ height: "30vh" }}>
          <img src={beer.image_url} alt="" style={{ height: "100%" }} />
        </div>
        <h1>{beer.name}</h1>
        <h2>{beer.attenuation_level}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <article>{beer.contributed_by}</article>
      </div>
    );
  }
}
