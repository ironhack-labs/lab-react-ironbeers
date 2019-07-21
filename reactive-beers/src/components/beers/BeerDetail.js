import React, { Component } from "react";
import { Link } from "react-router-dom";

class BeerDetails extends Component {
  state = {
    image_url: "",
    name: "",
    tagline: "",
    first_brewed: "",
    atenuation_level: "",
    description: "",
    contributed_by: ""
  };
  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    fetch(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(responseFromApi => {
        responseFromApi.json().then(datos => {
          const theBeer = datos;

          this.setState(theBeer);
        });
      })
      .catch(err => console.log(err));
  };

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

export default BeerDetails;
