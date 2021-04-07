import React, { Component } from 'react';
import Navbar from './Navbar';
import Beer from './Beer';
import { getBeers } from '../services/BaseService';

class ListBeers extends Component {
  state = {
    beers: [],
    loading: true,
  };

  componentDidMount() {
    getBeers().then((beers) => this.setState({ beers, loading: false }));
  }

  render() {
    const { beers } = this.state;
    console.log(beers)
    return (
      <div className="">
        <Navbar />
        <div className="__cont">
          <h1>Beers</h1>
          <div className="__row">
            {beers.map((b) => (
              <Beer {...b} key={b._id}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListBeers;
