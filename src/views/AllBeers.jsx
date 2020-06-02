import React, { Component } from 'react';

import SingleBeerForList from './../components/SingleBeerForList';
import { listAllBeers } from './../services/beersApi';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>All beers list</h1>
        <SingleBeerForList />
      </div>
    );
  }
}

export default AllBeers;
