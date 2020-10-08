import React from 'react';
import beerApi from '../beerApi';
import { Link } from 'react-router-dom';

import '../styles/Beers.css';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    beerApi
      .getBeers()
      .then((apiResponse) =>
        // console.log(apiResponse)
        this.setState({
          beers: apiResponse.data,
        })
      )
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const query = event.target.value;
    beerApi
      .filterBeer(query)
      .then((apiResponse) =>
        this.setState({
          beers: apiResponse.data,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>All beers</h1>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="search for a beer..."
          />
        </form>
        {this.state.beers.map((beer) => (
          <div className="beer-container" key={beer.name}>
            <img src={beer.image_url} alt="beer-img" />
            <div className="beer-infos">
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <h4>{beer.tagline}</h4>
              <p>
                created by: <i>{beer.contributed_by}</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
