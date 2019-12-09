import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      query: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(data => this.setState({ beers: data }));
  }

  search(event) {
    const searchQuery = event.target.value;
    this.setState({
      query: searchQuery
    });
  }

  render() {
    const ceva = this.state.beers;
    console.log(ceva.data);
    return (
      <div>
        <header className="header-beers">
          <Link to="/"> home</Link>
        </header>
        <div className="search-bar">
          <input
            onChange={this.search}
            value={this.state.query}
            name="searchQuery"
            placeholder="type your search here"
          />
        </div>
        <div className="image-top">
          <img src="/images/beers.png" alt="cerveza" />
        </div>
        <div className="body-div">
          {!this.state.beers.data && (
            <h1 className="loading-text">SATAN SATAN SATAN SATAN SATAN</h1>
          )}
          {this.state.beers.data &&
            ceva.data.map(beer => {
              if (
                beer.name.toLowerCase().match(this.state.query.toLowerCase())
              ) {
                return (
                  <div className="beer-card">
                    <a href={`/beers/${beer._id}`}>
                      <img src={beer.image_url} alt="cerveza" />
                      <h2>{beer.name}</h2>
                      <p>contributed by: {beer.contributed_by}</p>
                    </a>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export { Beers };
