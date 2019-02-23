import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
      this.setState({beers: response.data})
    })
  }



  render() {
    return (
      <div className="App">
       {this.state.beers.map(beer => <div>
         <h1>{beer.name}</h1>
         <img src={beer.image_url} width={60} height={150}/>
         <h3>{beer.tagline}</h3>
          <p>Created by: {beer.contributed_by}</p>
         </div>)}
      </div>
    );
  }
}

export default App;
