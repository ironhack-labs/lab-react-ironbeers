import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from './components/Home';
import Beers from './components/Beers';
import Random from './components/Random';
import New from './components/New';
import Header from './components/misc/Header';

class App extends Component {

  constructor(){
    super()
    this.state = {
        allBeers: []
    }
}

  render() {
    return (
      <div className="App">
        <Header></Header>
        <section className="container">
          <div className="column">
              <Router>
                  <div>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/beers' component={Beers}/>
                    <Route exact path='/random' component={Random}/>
                    <Route exact path='/new' component={New}/>

                    <Redirect to="/home"/>
                  </div>
              </Router>
              
            </div>
        </section> 
      </div>
    );
  }
}

export default App;
