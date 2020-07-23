import React, { Component } from 'react';
import HeaderNav from '../Components/HeaderNav';
import apiHandler from '../api/apiHandler';
import DisplayBeer from '../Components/DisplayBeer';
import SearchBar from '../Components/SearchBar';

class AllBeers extends Component {
  state = {
    beers: [],
    search: '',
  };

  handleSearch = (searchValue) => {
    console.log(searchValue);
    this.setState({ search: searchValue.toLocaleLowerCase() });
  };

  componentDidMount() {
    apiHandler
      .getAllBeers()
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      apiHandler
        .getSearch(this.state.search)
        .then((apiRes) => {
          console.log(apiRes.data);
          this.setState({ beers: apiRes.data });
        })
        .catch((apiError) => console.log(apiError));
    }
  }

  render() {
    return (
      <nav className="allBeers">
        <HeaderNav />
        <SearchBar handleSearch={this.handleSearch} />
        {this.state.beers.map((beer) => {
          return <DisplayBeer key={beer._id} beer={beer} />;
        })}
      </nav>
    );
  }
}

export default AllBeers;
