/* eslint-disable array-callback-return */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import SingleBeerForList from './../components/SingleBeerForList';
import BeerSearch from './../components/BeerSearch';

//importing API
import { listAllBeers } from './../services/beersApi';
import NavBar from '../components/NavBar';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
      query: '',
    };
  }

  //making a call to the API
  componentDidMount() {
    this.fetchBeerData();
  }

  fetchBeerData() {
    listAllBeers()
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        this.setState({
          allBeers: response.data,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  //updating the query as the user searches
  updateSearchQuery = (event) => {
    const value = event.target.value;
    this.setState({
      query: value,
    });
  };

  // handleInputChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   // is the as:
  //   // const value = event.target.value;
  //   // const input = event.target.name;
  //   // this.setState({ [input]: value });
  // };

  render() {
    console.log(this.state.query);
    const beersFilter = this.state.allBeers.filter((beer) => {
      return beer.name.toLowerCase().includes(this.state.query);
    });
    return (
      <div>
        <NavBar />
        <BeerSearch
          query={this.state.query} //saving the query
          handleInputChange={this.updateSearchQuery}
        />

        {beersFilter.map((beer) => {
          return <SingleBeerForList key={beer._id} beer={beer} />;
        })}
      </div>
    );
  }
}

export default AllBeers;
