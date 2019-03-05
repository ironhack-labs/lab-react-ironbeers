
import React, { Component } from 'react';
import { randomBeer } from '../../services/BeerService'
import Detail from '../beers/Detail'

export default class Random extends Component {

  state = {
    beer : [] ,
    error : false
  }

  componentDidMount = () => {
    randomBeer()
      .then(response => {this.setState({ beer: response.data })},
      err => {if(err){
        this.setState({
          error: true
        })
      }}
      ) 
  }

  render = ()=> {
    console.log(this.state.beer)
    return(
      <div>
        {this.state.beer.map(beer => 
          <Detail {...beer}></Detail>
        )}
      </div>
    )
  }
}