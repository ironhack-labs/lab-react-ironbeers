import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import axios from 'axios';

class App extends Component {
  state = { 
    listofBeers: [] 
}

  componentDidMount = () =>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        listofBeers: responseFromApi.data 
      })
    })
  }

  render() {
    return (
      <div className="App">
        
        <Homepage></Homepage>
     

      </div>
    );
  }
}

export default App;
