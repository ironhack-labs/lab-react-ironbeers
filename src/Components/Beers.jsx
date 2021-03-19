import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import SearchBar from './SearchBar';


export class Beers extends Component {
  
  beers = [...this.props.beers]

  state = {
    beers: this.beers,
    searchQuery: "",
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.searchQuery}`)
      .then((response) => {
               this.setState({beers: response.data})
      })
      .catch(err => {console.log(err)})
    }
      
}

// const exp = new RegExp(req.query.name);
//     query.name = { $regex: exp };


    handleSearchResult = (event) => {
      const value = event.target.value;  
      console.log(value);
      this.setState({ searchQuery: value });
    };
    

  render() {
    return (
      <div>
        <Navbar />
        {/* <SearchBar search={this.handleSearchResult}/> */}
        <div className="search__box">
          <h2>Search</h2>
          <input className="search__bar" onChange={this.handleSearchResult} value={this.state.searchQuery} type="text" name="search" id="search"/>
        </div>
        <ul className="beer__list">
          {this.state.beers.map((beer) => (
            <li className="beer__list-item" key={beer._id}>
              <Link
                exact
                to={`/beer-details/${beer._id}`}
                className="home__link"
              >
                <div className="beer__box">
                  <div className="beer__image-box">
                    <img
                      className="beer__image"
                      src={beer.image_url}
                      alt={beer.name}
                    />
                  </div>
                  <div className="beer__info">
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <p>
                      <b>Created by:</b> {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Beers


