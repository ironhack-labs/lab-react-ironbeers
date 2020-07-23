import React, { Component } from 'react';
import Header from '../Components/Header';
import apiHandler from '../api/apiHandler';
import '../styles/beers.css';
import { Link } from 'react-router-dom';

export class ListBeers extends Component {
  state = {
    beers: [],
    query: null,
  };

  componentDidMount() {
    apiHandler
      .getAllBeers()
      .then((apiRes) => {
        console.log(apiRes.message);
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.error(apiError));
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({ query: event.target.value });
    this.updateCollection();
  };

  updateCollection = () => {
    apiHandler
      .searchBeers(this.state.query)
      .then((apiRes) => {
        console.log(`successful get of query`);
        console.log(apiRes);
        this.setState({ beers: apiRes.data });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div id="view_ListBeers">
        <Header />
        <input
          type="text"
          placeholder="search beers"
          id="search_bar"
          onChange={this.handleSearch}
        />
        <div className="blank_fixed"></div>
        <div className="container_beers">
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`} className="link_beer">
                  <div  className="container_beer_item">
                    <img
                      src={beer.image_url}
                      className="img_beer"
                      alt={`${beer.name}`}
                    />
                    <div className="beer_item_info">
                      <h3>{beer.name}</h3>
                      <h4>{beer.tagline}</h4>
                      <p> {beer.contributed_by} </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div id="fill"></div>
      </div>
    );
  }
}

export default ListBeers;
