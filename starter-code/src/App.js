import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'
import Beers from './Beers'
import Random from './Random'
import NewBeer from './NewBeer'
import BeerDetail from './BeerDetail'

class App extends Component {

  componentDidMount(){
    
  }




  getRandomBeer = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(randomBeer=>{
      console.log(randomBeer)
    })
  }




  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/beers"> Beers |</Link>
          <Link to="/random-beer"> Random-beer </Link>
          <Link to="/new-beer">| New-beer </Link>\
        </nav>

        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={Random} />
          <Route path="/new-beer" component={NewBeer} />
          {/* http://localhost:3000/beer-detail/5daf440ccbc5d2fd7d19ebdf */}
          <Route path="/beer-detail/:beerId" component={BeerDetail} />
          
        </Switch>
      </div>
    );
  }
}

export default App;