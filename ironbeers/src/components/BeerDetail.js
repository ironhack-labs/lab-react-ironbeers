import React from "react";
import { Header } from "../components/Header";
import axios from "axios";

export class BeerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  getOneBeer = () => {
    let id = this.props.match.params.id;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
      .then(beer => {
        this.setState({ beer: beer.data });

      })
      .catch(error => console.log(error));
  };

  componentWillMount() {
    this.getOneBeer();
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
