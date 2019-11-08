import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import BeerCard from './BeerCard';

export default class BeerList extends Component {

  state = {
    beers: [],
  }

  async componentDidMount() {
    const beers = await this.getBeers()
    this.setState({beers: beers.data});
  }

  getBeers = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    return response;
  }

  render() {
    const { beers }  = this.state;
    return (
      <div className="beer-list">
        <Header/>
          {
            beers.map((beer) => {
              return (
                <BeerCard 
                  key={beer._id} 
                  id={beer._id}
                  name={beer.name} 
                  image={beer.image_url} 
                  tagline={beer.tagline} 
                  contributed_by={beer.contributed_by} />
              )
            })
          }
      </div>
     
    )
  }

}