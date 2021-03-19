import { Switch, Route} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home.jsx'
import Beers from './Views/Beers.jsx'
import OneBeer from './Views/OneBeer.jsx'


function App() {
  return (
    <div className="App">
   
   <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer"/>
        <Route exact path="/new-beer"/>
        <Route exact path="/beers/:beerId" component={OneBeer}/>
      </Switch>
    </div>
  );
}

export default App;
