import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import BeerList from "../beer-list/BeerList";
import RandomBeer from "../random-beer/RandomBeer"
import AddBeer from '../add-beer/AddBeer';   
/* import BeerDetails from "../beer-detail/BeerDetails" */
import Navbar from '../navbar/Navbar'

class App extends Component {
  constructor(){
    super();
    this.state={
      beers: []
    };
  }



  render() {
    return (
      <div className="App">     
        <Switch>
          <Route exact path="/" component={Home} ref={this.componentDidMount} />
          <Route exact path="/beer" component={BeerList} />
          <Route exact path="/random" component={RandomBeer} />
          <Route exact path="/new" component={AddBeer} />}
          {/* <Route exact path="/single/:id" component={BeerDetails} /> */}
        </Switch> 
        {this.state.beers.map(beer => <p>{beer.name}</p>)}
      </div>
    );
  }
}

export default App; 