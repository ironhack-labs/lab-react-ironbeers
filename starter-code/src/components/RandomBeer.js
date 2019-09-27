import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class RandomBeer extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    const beerId = this.props.match.params.id;
    console.log(beerId);
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        console.log("random, ", response.data);
        this.setState({
          beers: response.data
        });
      });
  }

  render() {
    console.log("beers rendered, ", this.state.beers);
    const beer = this.state.beers;
    return (
      <div>
        <div
          key={beer._id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img style={{ height: "60px" }} src={beer.image_url} alt="" />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
