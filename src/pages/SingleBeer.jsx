import React, { Component } from 'react';
import Container from '../components/Container';
import BeerView from '../components/BeerView';
import Waiting from '../components/Waiting';
import { getBeers } from "../lib/beerApi";

export default class SingleBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      beer: null
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    getBeers(`single/${id}`).then(beer => {
      this.setState({beer});
    });
  }
  render () {
    const {beer} = this.state;
    return (
      <Container className="singleBeer">
        {beer ?
          <BeerView img={this.state.beer.image_url} name={beer.name} tagline={beer.tagline} level={beer.attenuation_level} brewed={beer.first_brewed} description={beer.description} created={beer.contributed_by} single/>
          : <Waiting message="Please wait until we throw the beer! ;)"/>}
      </Container>
    )
  }
}
