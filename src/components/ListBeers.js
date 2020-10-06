import React from 'react';
import NavBar from '../components/Navbar';
import { getAllBeers, searchBeer } from '../services/api-client';
import { Link } from 'react-router-dom';
import './ListBeers.css'

export default class ListBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      Search: ''
    };
  }

  componentDidMount() {
    getAllBeers().then((res) =>
      this.setState({
        beers: res,
      })
    );
  }

  handleChange = (e) => {
    this.setState({
      Search: e.target.value,
    });
    this.searchBeer(this.state.Search)
  };

  searchBeer = (params) => {
    searchBeer(this.state.Search)
      .then (res => this.setState({beers : res}))
  }

  render() {
    if (this.state.beers === null) {
      return (
        <div>
          <NavBar />
          <div className="container">
            <div>Loading...</div>
          </div>
        </div>
      );
    }

    return (
      <div>
       <div clasName="container">
        <NavBar/>
        <div>
          <input
            className="searchBar"
            placeholder="Search Beer"
            type= "text"
            name="Search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <ul>
            {this.state.beers.map((beer) => {
              return (
                <li key={beer._id} className="beerCard">
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    className="beerImg"
                  />
                  <div className="beerInfo">
                    <Link to={`/beers/${beer._id}`}>
                      <h2> {beer.name} </h2>
                    </Link>
                    <h3> {beer.tagline} </h3>
                    <p><b> Created by: </b> {beer.contributed_by}</p>
                    </div>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

