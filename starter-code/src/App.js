import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AllBears from './components/AllBeers'
 




class App extends Component {



  render() {
    return (
      <div className="App">
        
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/beers' component={AllBears} />
        {/*<Route path ='/beers/:id' component={} />
        <Route path ='/random-beer' component={} />
        <Route path ='/new-beer' component={} /> */}

      </Switch>

        
      </div>
    );
  }
}

export default App;
