import React from 'react';
import Header from './Header';
import CardBeersList from './CardBeersList';
import axios from 'axios';

class BeersList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({
        beers: response.data
      })
    })
  }

    render(){
      return (
        <div>
          <Header />
          {this.state.beers.map(beer => 
          <CardBeersList img={beer.image_url} 
          name={beer.name} 
          tagline={beer.tagline} 
          contributed_by={beer.contributed_by} 
          link={beer._id} 
          key={beer._id}
          />)}
        </div>
        )
    }
}

export default BeersList;
