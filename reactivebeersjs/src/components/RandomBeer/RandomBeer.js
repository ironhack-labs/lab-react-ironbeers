import React, { Component } from "react";
import { getRandomBeer } from "../../services/ApiBeers";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  state = {
    beer: {}
  };

  componentWillMount = () => {
    getRandomBeer()
      .then(beer => {
        this.setState({ beer });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { beer } = this.state;
    return (
      <div>
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div>
          <img src={beer.image_url} alt="beer_image" />
        </div>
        <div>
          <div>
            <h5>{beer.name}</h5>
            <p>{beer.tagline}</p>
          </div>
          <div>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
          </div>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
