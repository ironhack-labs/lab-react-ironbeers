import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res.data);

        this.setState({
          beers: res.data,
        });
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h1>Welcome on Beers</h1>
        {this.state.beers.map((beer) => {
          return (
          <div className="beerCard">
            <Link to={`/beer/${beer._id}`}><h2 className="beerName">{beer.name}</h2></Link>
            <img className="beerImage" src={beer.image_url} alt={beer.name} />
            <p className="beerTagline">{beer.tagline}</p>
            <p className="beerCreator">by {beer.contributed_by}</p>
          </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
