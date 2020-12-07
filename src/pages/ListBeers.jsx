import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

class ListBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((allBeers) => {
      console.log(allBeers.data);
      this.setState({
        beers: allBeers.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Here are all the beers:</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <a href={`/beers/${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt="Beer label"
                  className="beer-img"
                />
                <h3>{beer.name}</h3>
              </a>
              <p>Tagline: {beer.tagline}</p>
              <p>Contributors: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
