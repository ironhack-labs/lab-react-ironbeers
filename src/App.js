import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {

  state = {
    beers: [],
    onebeer: []
  }

  async componentDidMount(){
      let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      console.log(res)

      this.setState({
        beers: res.data
      })

      let one = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      console.log(one)

      this.setState({
        onebeer: one.data
      })
  }

  showTheBeers = () => {
    return this.state.beers.map(beer => {
      return <li> {beer.name} </li>
    })
  }

  showOneBeer = () => {
    return this.state.onebeer.name
  }

  render() {
    return (
      <div>
        one:{this.showOneBeer()}
        {this.state.onebeer.name}
        {this.showTheBeers()}
      </div>
    );
  }
}

export default App;