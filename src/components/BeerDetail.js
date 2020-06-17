import React, { Component } from 'react';
import Axios from 'axios';
import Header from './Header';

class BeerDetail extends Component {
    state = {
        beer : {}
    }
  componentDidMount() {
      const { params } = this.props.match;
      const beerId = params.id;
      console.log (beerId)
      Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then(
        (response) => {
          this.setState({ beer: response.data });
        }
      );
  }
  
    render() {
    return (
    <div>
      <Header />
        <h3>{this.state.beer.name}</h3>
    </div>);
  }
}

export default BeerDetail;
