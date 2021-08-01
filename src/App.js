import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainallbeers from './all-beers/Mainallbeers';
import Mainrandombeer from './random-beer/Mainrandombeer';
import Mainnewbeer from './new-beer/MainNewBeer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './homeComponent/HeaderHome';
import Detailallbeers from './all-beers/DetailAllBeers';
import Eachbeer from './all-beers/Eachbeer';
import Randombeer from './random-beer/Randombeer';


function App() {
  return (
    <div className="App">
    
     
     
    <Switch>
    <Route path = '/' exact>
    <Mainallbeers/>
    <Mainrandombeer/>
    <Mainnewbeer/>
    </Route>
    <Route path='/beers' component={Detailallbeers} exact/>
    <Route path='/beers/:code' component={Eachbeer}/>
    <Route path='/random' component={Randombeer}/>
    </Switch>
       
        
    </div>
  );
}

export default App;
