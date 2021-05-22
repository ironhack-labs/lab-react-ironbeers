import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import AllBeers from './components/pages/AllBeers'
import RandomBeer from './components/pages/RandomBeer'
import NewBeer from './components/pages/CreateBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={AllBeers}/>
        <Route exact path='/random-beer' component={RandomBeer}/>
        <Route exact path='/new-beer' component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
