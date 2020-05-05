import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import Home from './components/Home'
import ListBeer from './components/ListBeer';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';



class App extends Component {

  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={ListBeer}/>
      <Route exact path="/beer/:beerId" component={SingleBeer} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer}  />
     </div>
    );
  }
}

export default App;
