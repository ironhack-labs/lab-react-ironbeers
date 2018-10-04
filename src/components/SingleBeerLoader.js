import React, { Component } from 'react';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';

export default class SingleBeerLoader extends Component {
  constructor(props){
    super(props);
    this.state = {
      beer: null,
      id: props.id
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
        this.setState({beer: beer.data[0]})
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


