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
        <Beer beer={this.state.beer}/>
      </div>
    )
  }
}
