import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import './BeerList.css';

class BeerList extends Component {
  state = {
    beersList: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({ beersList: res.data });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (event) => {
    event.preventDefault();
    let query = event.target.value;
    console.log(event.target.value);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        this.setState({ beersList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="BeersList">
        <Navbar />
        <input
          className="form-control mb-3"
          name="query"
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <div className="BeersList__container">
          {this.state.beersList.map((beer) => (
            <div key={beer._id} className="BeersList__beer-box">
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <Link to={`/beers/${beer._id}`} className="link">
                  <h3 className="BeersList__beer-text">{beer.name}</h3>
                </Link>
                <p className="BeersList-text tagline">{beer.tagline}</p>
                <p className="BeersList__beer-text created">
                  <b>Created by:</b> {beer.contributed_by}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BeerList;
