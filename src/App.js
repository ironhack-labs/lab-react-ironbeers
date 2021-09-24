import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import HomePage from './components/Pages/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeersPage from './components/Pages/BeersPage/BeersPage';
import BeerRandom from './components/Pages/BeerRandom/BeerRandom';

const a = 0
function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/cervezas" render={() => <BeersPage />} />
      <Route path="/random" render={() => <BeerRandom />} />
      <Route path="/cervezas/:id" render={() => a} />
      <Route path="/cerveza-nueva" render={() => a} />
    </Switch>

    </div>
  );
}

export default App;
