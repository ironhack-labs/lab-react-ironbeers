import React, { Component } from 'react'
import axios from 'axios'
import Beer from './Beer'

export default class AllBeers extends Component {
  state = {
    allBeers: []
  }
  
  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers').then(beers => {
        this.setState({
          allBeers: beers.data
        })
    }).catch(err => console.log(err))
  }

  render() {
    console.log(this.state.allBeers)
    return (
      <div className="contain">

        {this.state.allBeers.map((beer, i) => {
          return <Beer beer={beer} key={i} />
        })}
      </div>
    )
  }
}
