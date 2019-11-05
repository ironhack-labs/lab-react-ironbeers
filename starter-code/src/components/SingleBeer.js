import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import CardBeerDetail from './CardBeerDetail'

class SingleBeer extends Component {
  constructor(props){
    super(props)
    this.state = {
      singleBeer: {},
    }
  }

  componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(singleBeer => {
      this.setState({
        singleBeer: singleBeer.data,
      })
    })
  }

  render(){
    return (
      <div>
     <Header />
     <CardBeerDetail 
     img={this.state.singleBeer.image_url} 
     name={this.state.singleBeer.name} 
     tagline={this.state.singleBeer.tagline} 
     first_brewed= {this.state.singleBeer.first_brewed} 
     attenuation_level={this.state.singleBeer.attenuation_level} 
     description={this.state.singleBeer.description}
     contributed_by={this.state.singleBeer.contributed_by}
      />
        </div>
    )
  }
}

export default SingleBeer;