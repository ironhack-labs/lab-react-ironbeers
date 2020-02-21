import React from "react";
import axios from "axios";
import { Link, Navlink, Route } from "react-router-dom";

class Beer extends React.Component {
  state = {
    beer: null
  };

  render() {
    console.log("Rendered Beer Page");
    const beer = this.state.beer;
    return (
      <React.Fragment>
        <Link to="/">Home</Link>

        <div>
          <img src={beer?.image_url} alt={beer?.name} />
          <h1>{beer?.name}</h1>
          <p>{beer?.tagline}</p>
          <p>{beer?.first_brewed}</p>
          <p>{beer?.attenuation_level}</p>
          <p>{beer?.description}</p>
          <p>{beer?.contributed_by}</p>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ beer: response.data });
      })
      .catch(err => console.log(err));
  }
}

export default Beer;
