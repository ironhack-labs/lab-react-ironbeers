import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import AllB from './components/beers/All';
import Routes from './Routes';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    let homeButton;
    if (window.location.href !== 'http://localhost:3000/') {
       homeButton = <Link to="/"><img id="homebutton" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="homebutton"/></Link>
     }else{
       homeButton = ""
     }
    return (
      <div className="App">
     {homeButton}
     <Routes/>
      </div>
    );
  }
}

export default App;
