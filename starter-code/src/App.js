import React, { Component } from 'react';
//estilos
import './App.css';
//para rutas
import { Switch, Route } from 'react-router-dom'
//componentes
import Navbar from './components/nav/Navbar'
import Home from './components/home/Home'
import AllBeers from './components/allBeers/AllBeers'
import Beer from './components/beer/Beer'
import Random from './components/random/Random'
//TO-DO post new cerveza , filtrar cervezas y estilos 

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" render={() => <Home/>} />
            <Route exact path="/beers" render={() => <AllBeers/>} />
            <Route exact path="/:id" render={match => <Beer {...match}/>} />
            <Route exact path="/random" render={() => <Random/>} />
        </Switch>
      </>
    )
  }
}

export default App;
