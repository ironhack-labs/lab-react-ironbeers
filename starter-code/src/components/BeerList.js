import React from 'react'
import Navbar from './Navbar';
import Beer from './Beer'
import { list } from '../services/BeerService'

class BeerList extends React.Component {
  state = {
    beers: []
  }
  componentDidMount() {
    list()
      .then(beers => this.setState({ beers }))
  }

  render() {
    return(
      <div className="BeerList container">
        <Navbar/>
        {this.state.beers.map((beer, i) => <Beer beer={beer} key={i}/>)}
      </div>
    )
  }
}

export default BeerList
