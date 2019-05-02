import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

export default class BeerDetail extends Component {

  constructor(){
    super()
    this.state={
      beer:''
    }
  }
  componentDidMount(){
    if (this.props.match.params.id){
      axios.get(`http://localhost:5000/single/${this.props.match.params.id}`)
      .then(beer => {
        this.setState({
          ...this.state,
          beer: beer.data
        })
      })
    } else {
      axios.get(`http://localhost:5000/random`)
      .then(beer => {
        this.setState({
          ...this.state,
          beer: beer.data
        })
      })
    }

  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <p>{this.state.beer.name}</p>
        <img src={this.state.beer.image_url} alt=''/>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>

      </div>
    )
  }
}
