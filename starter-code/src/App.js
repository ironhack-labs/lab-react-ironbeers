import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends React.Component {

  state={
    allBeers:[],
  }

  /*componentDidMount(){
    axios.get(`https://ih-beer-api.herokuapp.com/beers`).then(allBeers=>{
      this.setState({allBeers:allBeers.data})
    })

  } */
  
  render(){
  return (
    <div className="App">
      <h1>Iron Beers</h1>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Beers' component={Beers} />
          <Route exact path='/NewBeer' component={NewBeer} />
          <Route exact path='/RandomBeer' component={RandomBeer} />
        </Switch> 
      
      </div>
    </div>
  );
}
}


export default App;
