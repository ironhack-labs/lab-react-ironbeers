import React, { Component } from 'react';
import axios from 'axios';

export default class OneBeer extends Component {
  state = {
    beerid: {},
  };

  importBeerId = () => {
    //console.log(this.props);
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((beer) => {
        console.log(beer.data);
        this.setState({
          beerid: beer.data,
        });
        console.log(this.state.beerid);
      });
    //console.log({ props });
  };

  componentDidMount() {
    this.setState({ beerid: this.importBeerId() });
  }
  render() {
    if (!this.state.beerid)
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );

    console.log(this.state.beerid);
    return (
      <div>
        <h1>{this.state.beerid.name}</h1>
      </div>
    );
  }
}
