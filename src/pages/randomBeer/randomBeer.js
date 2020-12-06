import React, { Component } from 'react';
import axios from 'axios';
import Beer from '../../components/Beer';
import Header from '../../components/header/Header';

class randomBeer extends Component {
  state = {
    randomBeer: {},
  };

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        console.log(res.data);
        this.setState({
          randomBeer: res.data,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Beer beer={this.state.randomBeer} />
      </div>
    );
  }
}

export default randomBeer;
