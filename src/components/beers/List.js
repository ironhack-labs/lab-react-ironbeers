import React, { Component } from 'react';
import axios from 'axios'
import { ListBeers } from '../../services/BeerService'
import ListItem from '../beers/ListItem'

export default class Home extends Component {

  state= {
    beers: [],
    error: false
  }

  componentDidMount = () => {
    ListBeers()
      .then(response => {this.setState({ beers: response.data })},
      err => {if(err){
        this.setState({
          error: true
        })
      }}
      ) 
  }


  render = ()=> {
    if(this.state.error){

     return <h1>Some Bad request from the server :(</h1>
    } else{
      return (
        <div className='has-margin-top-20'>
          {this.state.beers.map(beer => 
           <ListItem {...beer}></ListItem>
          // <h1>{beer.name}</h1>
              )}
        </div>
      );
    }

    }
}