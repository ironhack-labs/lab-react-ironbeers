import React from "react";
import { Header } from "../components/Header";
import axios from "axios";

export class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
  }

  getRandomBeer = () => {

    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(beer => {
        this.setState({ beer: beer.data[0] });

      })
      .catch(error => console.log(error));
  };

  componentWillMount() {
    this.getRandomBeer();
    console.log(this.state.beer);
  }
  render() {
    let {
        image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by
    } = this.state.beer;
    return (
      <div>
        <Header />
        <div>
          <img height="300px" src={image_url} alt={name} />
          <h1>{name}</h1>
          <h2>{attenuation_level}</h2>
          <p>{tagline}</p>
          <p>{first_brewed}</p>
          <p>{description}</p>
          <p>{contributed_by}</p>
        </div>
      </div>
    );
  }
}
