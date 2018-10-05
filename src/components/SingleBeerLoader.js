import React, { Component } from 'react';
import SingleBeer from './SingleBeer';
import axios from 'axios';

export default class SingleBeerLoader extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      beer: null,
      id: props.match.params.id
    }
  }
  
  componentDidMount(){
    if(!this.state.beer){
      this.getBeerById()
    }
  }

  getBeerById(){
    let id = this.state.id;
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
      .then(beer => {
        this.setState({beer: beer.data})
      });
  }
  
  render() {
    let {beer} = this.state
    if(!beer){
      return <h1>Loading, please wait...</h1>
    } else {
      return (
          <SingleBeer beer={this.state.beer}/>
      );
    }
  }
}


