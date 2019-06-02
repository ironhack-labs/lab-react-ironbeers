import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './scenes/Home';
import BeersList from './scenes/BeersList';
import RandomBeer from './scenes/RandomBeer';
import NewBeer from './scenes/NewBeer';
import SingleBeer from './scenes/SingleBeer';


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={BeersList} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
          <Route exact path='/beers/:id' component={SingleBeer} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
 