import React, { Component } from 'react'
import CardBeer from './CardBeer';
import axios from 'axios'

export default class AllBeers extends Component {
  state = {
    beers: [] 
  }
  
 componentDidMount () {
   axios 
   .get ('https://ih-beer-api.herokuapp.com/beers')
   .then (({data}) =>{
     this.setState({beers:data})
   })
   .catch(error => console.error(error))
 } 

  render() {
    return (
      <div>
        <h1>All beers</h1>
        {this.state.beers.map((beer,i) => {
         return(
           <CardBeer {...beer} />
         ) 
      })}
      </div>
    )
  }
}
