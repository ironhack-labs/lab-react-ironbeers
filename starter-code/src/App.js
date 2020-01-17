import React, { Component } from 'react';
import './App.css';
import Beers from "./components/Beers"
import axios from "axios";
import {Link, Route} from "react-router-dom";
import 'bulma/css/bulma.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      
          <Route exact path="/" component={Beers}></Route>
 
      </div>
    );
  }
}

export default App;

//npm install axios react-router-dom query string bulma font-awesome bulma-helpers node-sass--s