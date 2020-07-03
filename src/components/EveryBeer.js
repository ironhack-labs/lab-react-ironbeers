import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

class EveryBeer extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    console.log(res.data);

    this.setState({
      beers: res.data,
    });
  }
  showTheBeers = () => {
    return this.state.beers.map((beer) => {
      return (
        <div>
          <Link to={`/beers/${beer.name}`}>
            <img className="all-beers-images" src={beer.image_url} />
          </Link>
          <div>
            <span>{beer.name}</span>
          </div>
          <div>
            <span>{beer.tagline}</span>
          </div>
          <div>
            <span>{beer.contributed_by}</span>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        {this.showTheBeers()}
      </div>
    );
  }
}

export default EveryBeer;
