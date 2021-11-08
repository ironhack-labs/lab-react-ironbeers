
import React, {Component} from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Homepage from './components/Homepage';
import { Switch, Route } from 'react-router-dom';




class App extends Component {
  render(){
    return(

      <div>
        {/* <Navbar/> */}
         
        <Switch>
        <Route path='/' component={Homepage} />
          <Route path='/beers' component={Beers} />
          <Route path='/newbeer' component={NewBeer} />
          <Route path='/randombeer' component={RandomBeer} />
        </Switch>
      </div>
    )
  }
}

export default App;
