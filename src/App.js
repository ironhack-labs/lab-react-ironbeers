import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import NavMain from './components/NavMain';
import Beers from './components/Beers';
import SpecBeer from './components/SpecBeer';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavMain /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:id" component={SpecBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={CreateBeer} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
