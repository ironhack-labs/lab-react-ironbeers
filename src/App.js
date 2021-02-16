import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import Id from './components/Id'
import Random from './components/Random'
import New from './components/New'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/allbeers" render={(props) => <AllBeers {...props} />} />
        <Route exact path="/allbeers/:id" render={(props) => <Id {...props} />} />
        <Route exact path="/random" render={(props) => <Random {...props} />} />
        <Route exact path="/new" render={(props) => <New {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
