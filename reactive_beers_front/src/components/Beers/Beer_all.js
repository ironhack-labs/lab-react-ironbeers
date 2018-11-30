import React, { Component } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

class BeersAll extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentWillMount() {
    let { beers } = this.state;
    const base_url = "https://ironbeer-api.herokuapp.com/beers";
    axios.get(`${base_url}/all`).then(res => {
      console.log(res);
      beers = res.data;
      this.setState({ beers });
    });
  }
  render() {
    const { beers } = this.state;
    console.log(beers);
    return (
      <div>
        <Nav />
        {beers.map((beer, index) => (
          <div style={{borderBottom: "1px solid"}}>
            <Link key={index} to={`/single/${beer._id}`}>
              <img
                src={beer.image_url}
                alt={beer.image_url}
                style={{ maxWidth: "12%", height: "auto"}}
              />
              <h4 style={{maxWidth: "100%"}}>{beer.name}</h4>
              <p>{beer.tagline}</p>
              <p><strong>Created by:</strong> {beer.contributed_by}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BeersAll;
