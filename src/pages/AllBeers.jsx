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
    };
  }

  async componentDidMount() {
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

  render() {
    return (
      <div>
        <h1>All the Beers!</h1>
        {this.state.beers.map((beer) => (
          <div key={beer._id}>
              <img src={beer.image_url} alt="" />
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AllBeers;
