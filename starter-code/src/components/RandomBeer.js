import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import CardBeerDetail from './CardBeerDetail';


class RandomBeer extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomBeer: {}
    }
  }

  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(randomBeer => {
      this.setState({
        randomBeer: randomBeer.data
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
     <Header />
     <CardBeerDetail 
     img={this.state.randomBeer.image_url} 
     name={this.state.randomBeer.name} 
     tagline={this.state.randomBeer.tagline} 
     first_brewed= {this.state.randomBeer.first_brewed} 
     attenuation_level={this.state.randomBeer.attenuation_level} 
     description={this.state.randomBeer.description}
     contributed_by={this.state.randomBeer.contributed_by}
      />
        </div>
    )
  }
}

export default RandomBeer;