import React, { Component } from 'react'
import axios from 'axios';
import Beer from './Beer';
import './Allbeers.css';

export default class AllBeers extends Component {

  constructor(){
    super();
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/all')
      .then(beers => this.setState({
        ...this.state,
        beers: beers.data
      }))
  }

  render() {
    return (
      <div className="Allbeers">
        {
          this.state.beers.map(beer => <Beer key={beer._id} {...beer}/>)
        }
      </div>
    )
  }
}
