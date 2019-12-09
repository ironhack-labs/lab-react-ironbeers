import React, { Component } from 'react';
import './App.css';
import axios from "axios" 
import {Switch, Link, Route} from "react-router-dom"
import Beers from "./components/beers/beers"
import Random from "./components/random/random"
import NewBeer from "./components/new-beer/newBeer"
import BeerDetail from "./components/beer-detail/beerDetail"

class App extends Component {

  getRandomBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(randomBeer => {
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
        <Link to="/">
          <img src="./images/home.png" alt="home" width="70px"/>
          <p>Home</p>
        </Link>
        </nav>
        <div>
          <p>
            <img src="./images/beers.png" alt="beers"/>
            <br />
            <Link to="/beers">Beers</Link>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nulla dapibus, hendrerit felis quis, pretium metus. Fusce luctus a eros eu tincidunt. Suspendisse eget vulputate mauris. Praesent sagittis pharetra porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.</blockquote>
          </p> 
          <p>
            <img src="./images/random-beer.png" alt="random-beer"/>
            <br />
            <Link to="/random-beer"> Random</Link>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nulla dapibus, hendrerit felis quis, pretium metus. Fusce luctus a eros eu tincidunt. Suspendisse eget vulputate mauris. Praesent sagittis pharetra porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.</blockquote>
          </p>
          <p>
            <img src="./images/new-beer.png" alt="new-beer"/>
            <br />
            <Link to="/new-beer"> New Beer</Link>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nulla dapibus, hendrerit felis quis, pretium metus. Fusce luctus a eros eu tincidunt. Suspendisse eget vulputate mauris. Praesent sagittis pharetra porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.</blockquote>
          </p>
          
        </div>
          <Switch>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={Random} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer-detail/:beerId" component={BeerDetail} />
          </Switch>
      </div>
    );
  }
}

export default App;