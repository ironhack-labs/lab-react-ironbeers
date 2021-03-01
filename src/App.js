import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Beer from './components/Beer'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import Home from './components/Home'
import Header from './components/Header'
import BeerDetails from './components/BeerDetails'

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  exact path='/beer' component={Beer}/>
          <Route exact path='/beer/:id' component={BeerDetails} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
