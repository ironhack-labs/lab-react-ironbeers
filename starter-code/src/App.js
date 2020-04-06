import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/Header"
import Home from './componentes/Home'
import Newbeer from './componentes/Newbeer'
import ShowBeer from './componentes/ShowBeer'
import Beershook from './componentes/Beershook';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beershook} />
          <Route path='/random-beer' component={ShowBeer} />
          <Route path='/new-beer' component={Newbeer} />
          <Route path='/beer/:beerId' component={ShowBeer} />

        </Switch>
      </div>
    );
  }
}

export default App;
