import React, { Component } from "react";
import { getAllBeers } from "../../services/beers";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beers: []
  };
  async componentDidMount() {
    const beers = await getAllBeers();
    this.setState({
      beers
    });
  }

  render() {
    return (
      <>
        {this.state.beers.map((e, i) => (
          <Link key={i} to={`/beer/${e._id}`} >
            <Cards
              image={e.image_url}
              tagline={e.tagline}
              contributed_by={e.contributed_by}
            />
          </Link>
        ))}
      </>
    );
  }
}
