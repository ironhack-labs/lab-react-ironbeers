import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Beersapi extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <Link to={`/beers/${beer._id}`}>
              <div key='{beer._id}' className='allbeers'>
                <img src={beer.image_url} alt='' />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <small>{beer.contributed_by}</small>
                <hr />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beersapi;
