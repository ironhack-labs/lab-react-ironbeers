import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import Beers from './Beers';
import Home from './Home';
import BeerDetail from './BeerDetail'

class App extends React.Component {



render(){

  return (
    <div className="App">
    
     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/beers' component={Beers}/>
          <Route path='/eachbeer/:id' component={BeerDetail}/>

          <Route path='/randombeer' component={RandomBeer}/>
          <Route path='/newbeer' component={NewBeer}/>
    </Switch>

    </div>
  );
}
}
export default App;
