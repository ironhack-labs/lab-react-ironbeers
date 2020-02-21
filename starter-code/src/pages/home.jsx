import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Link from 'react-router-dom/Link';
import axios from 'axios';

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomBeer: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((beer) => {
        this.setState({ randomBeer: beer.data._id });
        console.log(beer.data);
      });
  }

  render() {
    return (
      <div>
        <Link to='/beers'>
          <Card>All Beers</Card>
        </Link>
        <Link to={`/beers/${this.state.randomBeer}`}>
          <Card>Random Beer</Card>
        </Link>
        <Link>
          <Card>New Beer</Card>
        </Link>
      </div>
    );
  }
}
