import React, { Component } from 'react'
import Beer from './Beer'
import Header from './Header'

export default class RandomBeer extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="randomBeer">
        <Header></Header>
        <h1>Aquí debería ir una cerveza Random que no consigo pintar</h1>
        <Beer></Beer>
      </div>
    )
  }
}
