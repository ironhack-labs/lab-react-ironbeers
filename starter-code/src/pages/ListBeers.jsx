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
          <div className="ListBeers-img-container">
            <img src={beer.image_url} alt="" className="ListBeers-img" />
            <h1>{beer.name}</h1>
            <h3 className="ListBeers-tagline">{beer.tagline}</h3>
            <p className="ListBeers-contributor">{beer.contributed_by}</p>
            <Link to={`/SingleBeer/${beer._id}`}>
              <button className="ListBeers-btn">Details</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ListBeers;
