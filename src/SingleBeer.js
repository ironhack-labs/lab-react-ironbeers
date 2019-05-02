import React, { Component } from 'react';
import './Beer.css';
import axios from 'axios';
import Beer from './Beer';

export default class SingleBeer extends Component {

  constructor(){
    super();
    this.state = {beer: {}};
  }

  componentDidMount(){
    axios.get('http://localhost:5000/single/'+this.props.match.params.id)
      .then(beer => this.setState({
        beer: beer.data
      }))
      .catch(err => console.error(err));
  }
  
  render() {
    return (
      <Beer {...this.state.beer}/>
    )
  }
}
