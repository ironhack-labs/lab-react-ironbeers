import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import axios from 'axios';
import BeerCard from './BeerCard';

class BeerRandom extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    console.log(this.props.match)
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response.data);
        this.setState({ beer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;
    console.log(this.props);
    return (
      <div>
        <h1>{beer.name}</h1>
        <Link to="/">
          <Button type="primary">Go back to Home</Button>
        </Link>
        <BeerCard beer={beer} />
      </div>
    );
  }
}

export default BeerRandom;