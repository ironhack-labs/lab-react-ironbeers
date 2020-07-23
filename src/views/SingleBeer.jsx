import React, { Component } from 'react';
import apiHandler from '../api/apiHandler';
import Header from '../Components/Header';
import BeerDisplay from '../Components/BeerDisplay';

export class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const beerId = this.props.match.params.beerId;
    console.log(beerId);
    apiHandler
      .getOneBeer(beerId)
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ beer: apiRes.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (this.state.beer === null)
      return (
        <div>
          <Header />
          <div className="wait_please">Have a cold one while waiting </div>
        </div>
      );
    return (
      <div>
        <Header />
        <BeerDisplay beer={this.state.beer} />
      </div>
    );
  }
}

export default SingleBeer;
