import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import Header from "../components/Header";
// import BeerDetail from "./BeerDetail"
import './beers.css';
import { Link } from 'react-router-dom';


class beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/beers').then(response => {
      this.setState({ beers: response.data });
      console.log(response.data)
    });
  }

  render() {
    return (
      <div className="beers">
        <Header />
        <p>Check out all of these beers</p>

        <div className="all-beers">
          {this.state.beers.map((beer) => (
            <div className="beer-card">
              <Link to={`/beer-detail/${beer._id}`}>
                <div className="beer-image">
                  <img src={beer.image_url} alt="beer" />
                </div>
                <div className="beer-text">
                  <h1>{beer.name}</h1>
                  <h5>{beer.tagline}</h5>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default beers;
