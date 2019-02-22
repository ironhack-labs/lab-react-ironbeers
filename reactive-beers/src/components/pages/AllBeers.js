import React, { Component } from 'react'
import api from '../../api'
import Header from '../Header'
import BeerItem from '../BeerItem'

export default class AllBeers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: []
    }
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className="h1_title">All Beers</h1>
        {this.state.beers.map((beer,i) => 
        <BeerItem beerImg={beer.image_url} beerName={beer.name} beerTagline={beer.tagline} beerDesc={beer.description} key={i} link={beer._id} />
        )}
      </div>
    )
  }
    componentDidMount(){
      api.getBeers()
      .then(beers => {
        console.log(beers)
        this.setState({
          beers: beers
        })
      })
  }
}