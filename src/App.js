import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {

  state = {
    beers: []
  }

  async componentDidMount(){

    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    console.log(res)

    // await axios.post(`https://ironrest.herokuapp.com/ironhackbeersstolen`, {beers: res.data})
  }

  showTheBeers = () => {
    return this.state.beers.map(beer => {
      return <li>{beer.name}</li>
      })
  }



  render() {
    return (
      <div>
        {this.showTheBeers()}
      </div>
    );
  }
}

export default App;
