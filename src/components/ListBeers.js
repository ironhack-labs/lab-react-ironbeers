import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends React.Component {
  state = {
    beers: [],
  };
  handleSubmit(event) {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
      .then((result) => {
          console.log(result)
        this.setState({ beers: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInput(event) {
    event.preventDefault();
    const input = event.target.name;

    if (input) {
      return this.handleSubmit(event);
    } else {
      return this.props.allBeers;
    }
  }

  render() {
    const allBeers = this.props.allBeers.map((beer, index) => {
      return (
        <div key={index} className="allListBeers">
          <img src={beer.image_url} alt={beer.name} />
          <div className="beerInfo">
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <p className="tagline">{beer.tagline}</p>
            <p>
              <strong>Created by: </strong>
              {beer.contributed_by}
            </p>
            <hr />
          </div>
        </div>
      );
    });
    return (
      <div className="ListBeers">
        <Header />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            name="q"
            onChange={(event) => this.handleInput(event)}
          />
          <button type="submit">Search</button>
        </form>
        {this.props.allBeers.length === 0 ? (
          <p>Loaging...</p>
        ) : (
          <div>{allBeers}</div>
        )}
      </div>
    );
  }
}

export default ListBeers;
