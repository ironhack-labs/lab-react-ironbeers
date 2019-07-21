import React, { Component } from "react";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  state = {
    image_url: "",
    name: "",
    tagline: "",
    first_brewed: "",
    atenuation_level: "",
    description: "",
    contributed_by: ""
  };

  getRandomBeer = () => {
    fetch("https://ironbeer-api.herokuapp.com/beers/random")
      .then(responseFromApi => {
        responseFromApi.json().then(datos => {
          const beer = datos;
          this.setState(beer);
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      atenuation_level,
      description,
      contributed_by
    } = this.state;
    return (
      <div>
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>{first_brewed}</p>
        <p>{atenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>

        <Link to={"/beer"}>regresar</Link>
      </div>
    );
  }
}

export default RandomBeer;
