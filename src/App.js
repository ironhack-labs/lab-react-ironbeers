import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import Home from './components/Home';
import Random from './components/Random';
import Newbeer from './components/Newbeer';
import BeersDetails from './components/BeersDetails';
import axios from 'axios';


class App extends Component {
  state = {
    beers: []
  };

    componentDidMount = async () => {
      console.log('SE HA MONTADO EL TEMA')
      const beers = await axios.get("https://api.punkapi.com/v2/beers")
          this.setState({ beers: beers.data });
          console.log(beers.data, 'estas son las beers')
        }
        
    render() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/random-beer' component={Random} />
      <Route exact path='/beers' render={() => <Beers beers={this.state.beers} /> } />
      <Route exact path='/beers/:id' component={BeersDetails}/> 
      <Route exact path='/new-beer' component={Newbeer} />
      </Switch>
      
   
     
    </div>
  );
}}

export default App;
