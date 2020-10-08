import NavMain from '../Components/NavMain';
import beersApi from '../api/beersApi';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  async componentDidMount() {
    beersApi
      .getBeers()
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  //// BONUS
  handleChange = (event) => {
    const value = event.target.value;

    beersApi.searchOne(value).then((apiResponse) => {
      console.log(apiResponse);
      this.setState({ beers: apiResponse.data });
    });
    console.log();
  };

  //// BONUS

  render() {
    return (
      <div>
        <NavMain />

        <input name="name" onChange={this.handleChange} type="text" />

        <h1>All the beers</h1>
        {this.state.beers.map((beer) => (
          <div>
            <img className="beerPic" src={beer.image_url} alt="beerImage" />
            <Link key={beer.name} to={`/beers/${beer._id}`}>
              {beer.name}
            </Link>
            <h3>{beer.tagline}</h3>
            <h4>{beer.contributed_by}</h4>
          </div>
        ))}
      </div>
    );
  }
}
