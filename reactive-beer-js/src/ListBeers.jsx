import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ListBeers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeers => {
      this.setState({
        ...this.state,
        beers: allBeers.data
      });
    });
  }

  render() {
    const beers = this.state.beers;
    return (
      <ul className="list-group">
        {beers.map(beer => {
          return (
            <li className="list-group-item">
              <div className="media">
                <img src={beer.image_url} class="img-small mr-3" alt={beer.name} />
                <div className="media-body"> 
                  <h5><Link to={`/beer/${beer._id}`}>{beer.name}</Link></h5>
                  <p>{beer.tagline}</p>
                  <p><b>Created by: </b>{beer.contributed_by}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
