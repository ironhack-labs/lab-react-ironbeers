import React, { Component } from 'react'
import Beer from './Beer'
import Header from './Header'
import axios from "axios";

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      random: {}
    }
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/random").then(random => {
      this.setState({
        ...this.state,
        random: random.data
      });
    });
  }
  render() {
    console.log(this.state.random)
    return (
      <div className="randomBeer">
        <Header></Header>
        <h1>Aquí debería ir una cerveza Random que no consigo pintar</h1>
        <Beer {...this.state}></Beer>
      </div>
    )
  }
}
