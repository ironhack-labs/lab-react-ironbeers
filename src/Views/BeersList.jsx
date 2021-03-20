import React, { Component } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/BeersList.css';

class BeersList extends Component {
  state = {
    beersList: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
      console.log(response);
      this.setState({beersList: response.data});
    })
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <div className="BeersList">
        <Header />
        <div className="BeersList__container">   
          {this.state.beersList && this.state.beersList.map(beer => (
            <div key={beer._id} className="BeersList__beer-box">
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <Link to={`/beers/${beer._id}`} className="link">
                  <h3 className="BeersList__beer-text">{beer.name}</h3>
                </Link>
                <p className="BeersList__beer-text tagline">{beer.tagline}</p>
                <p className="BeersList__beer-text created"><b>Created by:</b> {beer.contributed_by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BeersList;
