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
    return (
      <div className="">
        <Navbar />
        <div className="__cont">
          <h1 className="__py-3 __c-w">List beers:</h1>
          <div className="__row">
            {beers.map((b) => (
              <Beer {...b} key={b._id} list={true}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListBeers;
