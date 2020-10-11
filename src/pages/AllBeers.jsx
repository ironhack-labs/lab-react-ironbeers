import React from 'react';
import BeerAPI from '../api/beerApi';
import { Link } from 'react-router-dom';

console.log(BeerAPI);

class AllBeers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      selectedBeer: null,
      searchBeers: '',
    };
  }

  componentDidMount() {
    BeerAPI.getBeers()
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  componentDidUpdate() {
    console.log('I have updated !');
  }

  componentWillUnmount() {
    console.log('I have unmounted');
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });

    if (value) {
      BeerAPI.searchBeers(value)
        .then((apiResponse) => {
          this.setState({ beers: apiResponse.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <h1 className="title">All the Beers!</h1>
        <form className="flex col" id="searchform">
          <div>
            <label htmlFor="searchBeers" className="label">
              <strong>Search for a beer</strong>
            </label>
          </div>
          <div>
            <input
              type="text"
              name="searchBeers"
              id="searchBeers"
              onChange={this.handleChange}
              value={this.state.searchBeers}
            />
            <button>Search</button>
          </div>
        </form>
        <div id="beer-list">
          {this.state.beers.map((beer) => (
            <div key={beer._id} className="beer-card">
              <img src={beer.image_url} alt="beer" className="beer-img" />
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeers;
