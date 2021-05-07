import React, { Component } from 'react';
import BeerListElement from '../../components/BeerListElement/BeerListElement';
import NavBar from '../../components/NavBar/NavBar';
import BeersService from '../../services/beers.service';

export default class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
    this.beersService = new BeersService();
  }

  componentDidMount() {
    this.beersService
      .getAll()
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.error(err));
  }

  displayBeers(){
      return this.state.beers.map(beer => {
          return <BeerListElement key={beer._id} {...beer} />
      })
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.displayBeers()}
      </div>
    );
  }
}
