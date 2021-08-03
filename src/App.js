import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import './App.css'
import { NavLink } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import { Component } from 'react';
import axios from 'axios'
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component{
  state={
    beerList:[]
  }
  componentDidMount= async()=>{
      
      const list= await axios.get("https://ih-beers-api2.herokuapp.com/beers")

    
      this.setState({
        beerList: list.data
      })
  
}

  render(){
    return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/beers" render={(props)=><AllBeers {...props} beers={this.state.beerList}/>}></Route>
      <Route exact path="/beers/beer:id" render={(props)=><SingleBeer {...props} beers={this.state.beerList}/>}></Route>
      <Route exact path="/RandomBeer" component={RandomBeer}></Route>
      <Route exact path="/NewBeer" component={NewBeer}></Route>
     </Switch>
    </div>
  )
}

}

export default App


