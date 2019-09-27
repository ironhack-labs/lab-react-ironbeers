import React, { Component } from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'
import Layout from '../layout/Layout'


export default class Beers extends Component {
  state={
    beers: []
  }
  componentDidMount(){
    axios
    .get('https://ih-beer-api.herokuapp.com/beers')
    .then(({data}) => {
     const filtered = data.map(beer => (
       {
        image: beer.image_url,
        name: beer.name,
        tagline: beer.tagline, 
        contributed: beer.contributed_by,
        id: beer._id
       }
      ))
      
      this.setState({ beers:
        [...filtered]
      })
      
    })
    .catch((error) => {})
  }

  render() {
    const {beers} = this.state
    // console.log(beers);
    
    return (
      <div>
        <Layout></Layout>
        {beers.map((beer) => (
        <BeerCard beers={beer} key={beer.id} image={beer.image} 
        name={beer.name} tagline={beer.tagline}
        contributed={beer.contributed}
        />
          
        ))} 
        <h1>hola</h1>
      </div>
    )
  }
}
