import React, { Component, Fragment } from 'react';
import axios from 'axios';

import SingleBeer from './SingleBeer';

class RandomBeer extends Component {

  state ={
    beerId: ''
  }

  getAllIds() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      const ids = response.data.map(beer => beer._id);
      const randomNumber = Math.floor(Math.random() * ids.length - 1);

      this.setState({beerId: ids[randomNumber]});
    })
    .catch(error=>console.log(error));
  }

  getRandomId() {

  }

  componentDidMount() {
    this.getAllIds();
  }

  render() {
    if(!this.state.beerId) return (<div>Picking up some random beer...</div>)

    return (
      <Fragment>
        <SingleBeer id={this.state.beerId} backBtn={false} />
      </Fragment>
    );
  }
}

export default RandomBeer;