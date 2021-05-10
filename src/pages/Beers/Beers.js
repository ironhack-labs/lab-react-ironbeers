import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../../components/BeerCard/BeerCard';
import Header from '../../components/Header/Header';
import BeersService from '../../services/beers.service';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };

    this.BeersService = new BeersService();
  }

  componentDidMount(){
      this.BeersService.get()
        .then(res => {
            this.setState({beers: res.data})
        })
        .catch(err => console.error(err))
  }

  displayBeers() {
    return this.state.beers.map((beer) => {
      return (
          <BeerCard
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
            _id={beer._id}
          />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.displayBeers()}
      </div>
    );
  }
}
