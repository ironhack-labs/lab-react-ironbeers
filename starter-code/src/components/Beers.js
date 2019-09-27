import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beer: []
  };

  getBeerData = () => {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      console.log(response.data);
      const beer = response.data;

      this.setState({
        beer: beer
      });
    });
  };

  componentDidMount() {
    this.getBeerData();
  }

  render() {
    const specificBeer = this.state.beer.map(el => {
      return (
        <Link to={`/beers/${el._id}`} key={el._id}>
          <div className="specBeer-div">
            <img className="beer-img" src={el.image_url} alt={el.name} />
            <div>
              <h1>{el.name}</h1>
              <h2>{el.tagline}</h2>
              <p>Contributed by: {el.contributed_by}</p>
            </div>
          </div>
        </Link>
      );
    });

    return <div>{specificBeer}</div>;
  }
}
