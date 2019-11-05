import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Nav from "./Nav";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />

        {this.state.beers.map(beer => (
          <Card
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed={beer.contributed_by}
            id={beer._id}
          />
        ))}
      </div>
    );
  }
}

export default Beers;
