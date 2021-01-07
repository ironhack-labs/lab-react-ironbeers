import React, { Component } from 'react';
import axios from 'axios';
import NavMain from './NavMain.jsx'

export default class OneBeer extends Component {

    state = {
    beer: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const beerId = this.props.match.params.id;

    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
    .then((apiResponse) => {
      console.log("the data", apiResponse.data);
      setTimeout(() => {
        this.setState({
          beer: apiResponse.data,
        });
      }, 1000);
    });
  }

    render() {
        if (!this.state.beer) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
      <NavMain />
        <h2>Detail of one beer</h2>
        <div>
          <h2>{this.state.beer.name}</h2>
          <img src={this.state.beer.image_url} />
        </div>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
        )
    }
}
