import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Components/Home'
import Allbeers from './Components/Allbeers'
import Random from './Components/Random'
import BeerDetails from './Components/BeerDetails'

function App() {
  return (
    <div className="App">

         <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allbeers' component={Allbeers}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/beerdetails/:id' component={BeerDetails}/>
        </Switch>

    </div>
   
  );
}

export default App;
