import { Switch, Route} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home.jsx'
import Beers from './Views/Beers.jsx'
import OneBeer from './Views/OneBeer.jsx'
import RandomBeer from './Views/RandomBeer.jsx'
import NewBeer from './Views/NewBeer.jsx'


function App() {
  return (
    <div className="App">
   
   <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        <Route exact path="/beers/:beerId" component={OneBeer}/>
      </Switch>
    </div>
  );
}

export default App;
