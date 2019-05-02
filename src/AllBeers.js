import React, { Component } from 'react'
import axios from 'axios';
import Beer from './Beer';
import './Allbeers.css';

export default class AllBeers extends Component {

  constructor(){
    super();
    this.state = {
      search: '',
      beers: []
    }
  }

  componentDidMount(){
    this.loadBeers();
  }

  componentDidUpdate(){
    this.loadBeers();
  }

  loadBeers(){
    if(this.state.search.trim().length === 0){
      axios.get('http://localhost:5000/all')
        .then(beers => this.setState({
          ...this.state,
          beers: beers.data
        }))
        .catch(err=>console.error(err))
    }else{
      axios.get('http://localhost:5000/search?q='+this.state.search)
        .then(beers => this.setState({
          ...this.state,
          beers: beers.data
        }))
        .catch(err=>console.error(err))
    }
  }

  handleSearch(e){
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  render() {
    return (
      <div className="Allbeers">
        <input type="text" placeholder="Search beer" value={this.state.search} onChange={(e)=>this.handleSearch(e)}/>
        <div className="list">
        {
          this.state.beers.map(beer => <Beer key={beer._id} {...beer}/>)
        }
        </div>
      </div>
    )
  }
}
