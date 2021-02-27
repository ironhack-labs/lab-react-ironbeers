import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Beers from './components/Beers/Beers'
import Error from './components/Error/Error'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={ HomePage } exact /> 
            <Route path="/beers" component={ Beers } exact />
            {/* <Route path="/random-beer" component={ Beers } />
            <Route path="/new-beer" component={ Beers } /> */}
            <Route component={ Error } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

// without exact, the paths don't work