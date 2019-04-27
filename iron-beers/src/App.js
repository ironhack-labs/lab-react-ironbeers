import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Beers from './components/beer/Beers';
import BeerDetail from './components/beer/BeerDetail';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){

    return (
      <div>
       <Navbar />
       <Switch>
       <Route path='/beers' component={Beers}/>
       <Route path='/beers/:id' component={BeerDetail}/>
    
       </Switch>
      </div>
    );
  }
}

export default App;
