import React, { Component } from 'react';
import axios from 'axios';
import Detail from '../components/Detail';

export default class BeerDetail extends Component {
  state = {
    beer: null,
  };

  getBeerData = () => {
    const beerId = this.props.match.params.id;
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getBeerData();
  }

  render() {
    const beer = this.state.beer;
    //   Loader
    if (!beer) return <h1>Loading ...</h1>;

    return <Detail beer={beer} />;
  }
}
