import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers/Beers'
import Main from './components/main'



class App extends Component {



  render() {
    return (
      <div className="App">
      
       <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/beers" component={Beers}/>
          {/* <Route exact path="/projects/:id" component={ProjectDetails} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
