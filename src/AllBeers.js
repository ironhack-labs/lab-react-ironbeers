import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {
  state = {
    beers: []
  };
  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

    this.setState({
      beers: res.data
    });
  }
  filtered = event => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`
      )
      .then(res => {
        this.setState({
          beers: res.data
        });
      });
  };
  showMeBeers = () => {
    return this.state.beers.map(eachBeer => {
      return (
        <div className="row">
          <img src={eachBeer.image_url} alt="beer" />
          <div className="column">
            <Link style={{ textDecoration: 'none' }} to={`/${eachBeer._id}`}>
              <h2>{eachBeer.name}</h2>
            </Link>
            <div className="tag">{eachBeer.tagline}</div>
            <p>
              <strong>Created by: </strong> {eachBeer.contributed_by}
            </p>
          </div>
        </div>
      );
    });
  };
  render() {
    //console.log(this.state.beers);

    return (
      <div>
        <div className="searchBar">
          <h2>Find your Beer!</h2>
          <input
            onChange={this.filtered}
            type="text"
            name="name"
            placeholder="type_here"
          />
        </div>
        {this.showMeBeers()}
      </div>
    );
  }
}

export default AllBeers;
