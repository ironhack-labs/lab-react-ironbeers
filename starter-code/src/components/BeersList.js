import React from 'react';
import Header from './Header';
import CardBeersList from './CardBeersList';
import axios from 'axios';
import Search from './Search'

class BeersList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      searchTerm: ''
    }
  }

  onSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
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
      const filterBeers = this.state.beers.filter(beer => beer.name.startsWith(this.state.searchTerm))

      return (
        <div>
          <Header />
          <Search searchTerm={this.state.searchTerm} onSearchChange={this.onSearchChange}/>
          {filterBeers.map(beer => 
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
