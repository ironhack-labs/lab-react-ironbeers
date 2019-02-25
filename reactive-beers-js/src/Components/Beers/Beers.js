import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

   componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

   render() {
    return (
      <div>
        <div >
          <Link to="/">
            <img src="/images/home.png" alt="" />
          </Link>
        </div>
        <div >
        <div >
            {this.state.beers.map((beer, idx) => {
              return (
                <div  key={idx}>
                  <div >
                    <img src={beer.image_url} alt="" />
                  </div>
                  <div >
                    <Link to={`/beers/${beer._id}`}>
                      <h3>{beer.name}</h3>
                    </Link>
                    <span>{beer.tagline}</span>
                    <p><b>Created by:</b> {beer.contributed_by}</p>
                  </div>
                </div>
              );
            })}
        </div>
        </div>
      </div>
    );
  }
}
