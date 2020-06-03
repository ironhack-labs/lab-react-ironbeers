import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import SingleBeerForList from './../components/SingleBeerForList';

//importing API
import { listAllBeers } from './../services/beersApi';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
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

  render() {
    return (
      <div>
        {this.state.allBeers.map((beer) => {
          return <SingleBeerForList key={beer._id} beer={beer} />;
        })}
      </div>
    );
  }
}

export default AllBeers;
