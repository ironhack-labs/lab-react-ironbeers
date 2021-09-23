import React, { Component } from 'react';
import { Button, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import BeersService from '../../../services/beers.service';
import BeersItem from './BeersItem';

export default class BeersList extends Component {
  constructor() {
    super();

    this.state = {
      beers: null,
      show: false,
      searchValue: '',
    };
    this.BeersService = new BeersService();
  }

  componentDidMount() {
    this.refreshBeers();
  }

  refreshBeers = () => {
    this.BeersService.getBeers()
      .then((res) => {
        this.setState({
          ...this.state,
          beers: res.data,
        });
      })
      .catch((err) => console.error(err));
  };

 render() {
    return this.state.beers ? (
      <Row>
        {this.state.beers.map((beer, i) => (
          <BeersItem {...beer} />
        ))}
      </Row>
    ) : (
      <h3>Loading...</h3>
    );
  }
}
