import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Beers from './components/pages/Beers';
import NewBeer from './components/pages/NewBeer';
import RandomBeer from './components/pages/RandomBeer';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/new-beer' component={NewBeer}/>
        <Route exact path='/random-beer' component={RandomBeer}/>  
      </div>
    );
  } 
}

export default App;
