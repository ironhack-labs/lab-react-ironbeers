import React, { Component } from 'react';
import Container from '../components/Container';
import BeerView from '../components/BeerView';
import Waiting from '../components/Waiting';
import { getBeers } from "../lib/beerApi";

export default class RandomBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      beer: null
    }
  }
  componentDidMount(){
    getBeers('random').then(beer => {
      this.setState({beer: beer[0]});
    });
  }
  render() {
    const {beer} = this.state;
    return (
      <Container className="randomBeer">
        {beer ?
          <BeerView img={this.state.beer.image_url} name={beer.name} tagline={beer.tagline} level={beer.attenuation_level} brewed={beer.first_brewed} description={beer.description} created={beer.contributed_by} single={false}/>
          : <Waiting message="Please wait until we throw the beer! ;)"/>}
      </Container>
    );
  }
}
