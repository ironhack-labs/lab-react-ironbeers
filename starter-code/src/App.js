import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch } from 'react-router-dom';
import AllBeers from "./Components/AllBeers"
import RandomBeer from "./Components/RandomBeer"
import NewBeer from "./Components/NewBeer"
import Beer from "./Components/Beer"
import Home from "./Components/Home"
import axios from 'axios'

class App extends Component {

  constructor() {
      super();
      this.state = {
          beers: [], 
          ready: false
        }

      this.id=""
  }


  componentDidMount(){

      axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => { //This takes time 
          this.setState({
            beers:res.data, 
            ready: true
          }) 
      })
  }


  render() {
    return (
      <div className="App container">

        <Switch>
          <Route exact path="/beers"          render={(props) =>   <AllBeers     {...props} beers={this.state.beers}/>} />
          <Route exact path="/random-beer"    render={(props) =>   <RandomBeer   {...props} />} />
          <Route exact path="/new-beer"       render={(props) =>   <NewBeer      {...props} />} />
          <Route exact path="/beers/:id"      render={(props) =>   <Beer         {...props} ready={this.state.ready} beers={this.state.beers}/>} />
          <Route       path="/"               render={(props) =>   <Home         {...props} ready={this.state.ready} beers={this.state.beers}/>} /> 
        </Switch>

      </div>
    );
  }
}

export default App;
