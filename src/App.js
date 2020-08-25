import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import ListBeer from './components/ListBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route path="/beers/:id" render={props => <SingleBeer {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
