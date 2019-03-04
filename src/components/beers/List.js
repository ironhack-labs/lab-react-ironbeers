import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import axios from 'axios'
import {ListBeers} from '../../services/BeerService'

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
        <div>
          {this.state.beers.map(beer => 
              <h1>{beer.name}</h1>)}
        </div>
      );
    }

    }
}