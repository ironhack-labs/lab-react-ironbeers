import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Beers from './beers/BeersList'

function App() {
    
    return (
      <>
       
        <Switch>
          
            <Route exact path="/beers" component={Beers} />
            
          </Switch>
        
      </>
    )

  }


export default App;
