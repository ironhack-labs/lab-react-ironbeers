import React, { Component } from 'react'
import axios from 'axios'
import Beer from './../../components/Beer/Beer'

export default class BeerDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      beer: {}
    }
  }
  
  componentDidMount() {
    axios.get(`http://localhost:5000/single/${this.props.match.params.beerID}`).then(beer => {
      this.setState({
        ...this.state,
        beer: beer.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello, I am the beer detail site</h1>
        <Beer beer={this.state.beer}/>
      </div>
    )
  }
}
