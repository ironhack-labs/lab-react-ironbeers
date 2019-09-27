import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import axios from 'axios';
import BeerCard from '../beers/BeerCard';

export default class BeerContainer extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
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
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <h1>{beer.name}</h1>
        <BeerCard beer={beer} />
      </div>
    );
  }
}