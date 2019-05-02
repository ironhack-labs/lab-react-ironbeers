import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

import { Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Default from './components/Default';
import Cerveza from './components/Cerveza';
import Random from './components/Random';
import NuevaCerveza from './components/NuevaCerveza';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        
        {/* <button
          className="App-link"
          onClick={()=>this.misBirras()}
        >
          Find beers
          
        </button> */}
      </header>
      <nav>
        <Link to="/about"><button>Todas las cervezas</button></Link>
        <Link to="/random"><button>Una cerveza random</button></Link>
        <Link to="/nueva"><button>Una nueva cerveza</button></Link>
        <Link to="/"><button>home</button></Link>
      </nav>
      <hr/>
      <section>
        <Switch>
            <Route path="/random" component={Random}/>
            <Route exact path='/nueva' component={NuevaCerveza} />
            <Route exact path='/' component={Default} />
            <Route path='/about/:id' component={Cerveza} />
            <Route path='/about' component={About} />
          </Switch>
      </section>
      
    </div>
    )
  }
}

