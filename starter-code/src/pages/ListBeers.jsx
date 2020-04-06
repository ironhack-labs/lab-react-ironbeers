import React, { Component } from 'react';
import '../stylesheets/ListBeers.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({ beers: res.data });
    });
  }

  render() {
    return (
      <div className="ListBeers">
        {this.state.beers.map((beer) => (
          <Link className="ListBeers-link" to={`/SingleBeer/${beer._id}`}>
            <div className="ListBeers-container">
              <div className="ListBeers-img">
                <img src={beer.image_url} alt="" className="ListBeers-img" />
              </div>
              <div className="ListBeers-info">
                <h1 className="ListBeers-name">{beer.name}</h1>
                <h3 className="ListBeers-tagline">{beer.tagline}</h3>
                <p className="ListBeers-contributor">
                  Created by {beer.contributed_by}
                </p>
              </div>
            </div>
            <hr className="ListBeers-highlight" />
          </Link>
        ))}
      </div>
    );
  }
}

export default ListBeers;
