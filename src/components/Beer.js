import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

class Beer extends React.Component {
  state = {
    beers: [],
  };

  getAllBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        const data = response.data;
        this.setState({ beers: data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAllBeers();
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.beers.map((beer) => (
          <div key={beer._id} className="beer-container">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="beer image" />
            </Link>
            <h3>{beer.name}</h3>
            <p>{beer.tagline} </p>
            <p>{beer.contributed_by} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Beer;
