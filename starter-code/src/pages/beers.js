import React, { Component } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
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
        <div className="beers-nav">
          <Nav />
        </div>
        <div className="all-beers">
          {this.state.beers.map((beer) => (
              <Link style={{ textDecoration: 'none', color: 'black' }} to={`/beer-detail/${beer._id}`}>
              <div className="beers-card">
                <div><img className="beers-image" src={beer.image_url} alt="beer"/></div> 
                <div className="beers-text">
                  <h3>{beer.name}</h3>
                  <h5>{beer.tagline}</h5>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
              </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default beers;
