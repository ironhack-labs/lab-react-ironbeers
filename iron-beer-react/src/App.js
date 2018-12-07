import React, { Component } from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import ProjectList from './components/beer';
import SingleBeer from './components/SingleBeer'
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        
      
        <Switch>
          <Route exact path="/SingleBeer" component={SingleBeer}/>
          <Route exact path="/beer" component={ProjectList}/>
          <Route exact path="/" component={Home}/>
        </Switch>

        
      
      </div>
    );
  }
}

export default App;
