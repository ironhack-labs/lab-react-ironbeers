import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Beer from '../../components/Beer/Beer';
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
            console.log(res.data);
            this.setState({beers: res.data})
        })
        .catch(err => console.error(err))
  }

  displayBeers() {
    console.log('holabeers', this.state.beers);
    return this.state.beers.map((beer) => {
      return (
          <Beer 
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
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
