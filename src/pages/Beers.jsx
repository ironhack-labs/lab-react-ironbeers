import React, { Component } from 'react';
import Header from '../components/Header';
import BeersApi from '../API/BeersApi';
import { Link } from 'react-router-dom';

export default class beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      selectedBeers: null,
    };
  }

  async componentDidMount() {
    try {
      const apiResponse = await BeersApi.getBeers();
      this.setState({ beers: apiResponse.data });
      console.log(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>all beers</h1>
        {this.state.beers.map((item, key) => (
          <Link key={key} to={`/beers/${item._id}`}>
            <img src={item.image_url} alt="image" />
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <p>{item.contributed_by}</p>
          </Link>
        ))}
      </div>
    );
  }
}
