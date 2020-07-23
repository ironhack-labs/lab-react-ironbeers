import React, { Component } from 'react';
import Header from '../Components/Header';
import apiHandler from '../api/apiHandler';
import BeerDisplay from '../Components/BeerDisplay';

export class RandomBeer extends Component {
  state = {
    randomBeer: null,
  };

  componentDidMount() {
    apiHandler
      .getRandomBeer()
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ randomBeer: apiRes.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (this.state.randomBeer === null)
      return (
        <div>
          <Header />
          <div className="wait_please">Have a cold one while waiting </div>
        </div>
      );

    return (
      <div>
        <Header />
        <BeerDisplay beer={this.state.randomBeer} />
      </div>
    );
  }
}

export default RandomBeer;
