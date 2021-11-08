
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
        <Route exact path="/" component={Homepage} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    )
  }
}

export default App;
