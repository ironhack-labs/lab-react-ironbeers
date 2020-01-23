import React from 'react'
import Navbar from './Navbar';
import Beer from './Beer'
import { list } from '../services/BeerService'
import './BeerList.css'

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
        <div className="container nav-offset">
          {this.state.beers.map((beer, i) => (
            <div key={i}>
              <Beer beer={beer}/>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BeerList
