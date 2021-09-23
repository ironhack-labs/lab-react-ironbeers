import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import BeersService from './../../../services/beers.service';
import BeerItem from './BeerItem';

export default class BeersPage extends Component {

  constructor(props) {
    super();

    this.state = {
      beers: null,
    }
    this.BeersService = new BeersService();
  }

  componentDidMount = () => {
  
    this.BeersService.getBeers()
      .then(res => {
        this.setState({
          ...this.state,
          beers: res.data
        })
      })
      .catch(err => console.error(err))
  }

  displayBeers = () => this.state.beers.map(beer => <BeerItem key={beer._id} {...beer} />)

  render() {
    return (
      this.state.beers ?
        <Row>
          {this.props.children}
          {
            this.displayBeers()
          }
        </Row>
        :
        <h3>Loading...</h3>
    )
  }
}
