import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';


class App extends React.Component {




  render() {

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/newBeer' component={NewBeer} />
          <Route exact path='/randomBeer' component={RandomBeer} />
          <Route exact path='/:id' component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
