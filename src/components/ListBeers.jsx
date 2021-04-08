import React, { Component } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import Navbar from './Navbar';
import Beer from './Beer';
import Search from './Search';
import { getBeers, getSearch } from '../services/BaseService';

class ListBeers extends Component {
  state = {
    beers: [],
    loading: true,
    search: '',
    prevstate: '',
  };

  componentDidMount() {
    // console.log('didMount');
    getBeers().then((beers) => {
      console.log('request getBeers');
      this.setState({ beers, loading: false });
    });
  }

  componentDidUpdate() {
    // console.log('didUpdate');
    if (this.state.search !== this.state.prevstate) {
      this.setState({ prevstate: this.state.search });
      if (this.state.search === '') {
        getBeers().then((beers) => {
          console.log('request getBeers');
          this.setState({ beers, loading: false });
        });
      } else {
        getSearch(this.state.search).then((beers) => {
          this.setState({ beers, loading: false });
          console.log('request getSearch');
        });
      }
    }
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { beers, loading } = this.state;
    return (
      <div className="">
        <Navbar />
        <div className="__cont">
          <h1 className="__c-w __m-2">List beers:</h1>
          <Search handleSearch={this.handleSearch} search={this.state.search} />
          <div className="__row">
            {loading ? (
              <SyncLoader color="orange" />
            ) : (
              beers.map((b) => <Beer {...b} key={b._id} list={true} />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListBeers;
