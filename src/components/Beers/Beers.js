import React from 'react';
// import axios from 'axios';
import PunkAPI from 'punkapi-javascript-wrapper';

import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
    searchString: '',
  };

  componentDidMount() {
    // axios
    //   .get('https://ih-beers-api2.herokuapp.com/beers')
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ beers: res.data });
    //   })
    //   .catch((err) => console.log(err));
    const punkapi = new PunkAPI();
    punkapi
      .getBeers()
      .then((beers) => {
        console.log(beers);
        this.setState({ beers });
      })
      .catch((error) => console.log(error));
  }

  handleSearchBeers = (event) => {
    this.setState({ searchString: event.target.value }, () => {
      const shouldSearch = this.state.searchString && { beer_name: this.state.searchString };
      const punkapi = new PunkAPI();
      punkapi
        .getBeers(shouldSearch)
        .then((beers) => {
          console.log(beers);
          this.setState({ beers });
        })
        .catch((error) => console.log(error));
    });
  };

  render() {
    return (
      <div className="Beers">
        <div>
          <Link to="/">&#8962;</Link>
        </div>
        <div>
          <input
            type="text"
            name="searchString"
            value={this.state.searchString}
            placeholder="Filter beers"
            onChange={(event) => this.handleSearchBeers(event)}
          />
        </div>
        <div>
          {this.state.beers.map((beer) => {
            return (
              <Link to={`/beers/${beer.id}`}>
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
