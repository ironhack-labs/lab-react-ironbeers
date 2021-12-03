import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import Beers from './components/Beers'
// import RandomBeer from '../RandomBeer'
// import NewBeer from '../NewBeer'

    function App() {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
              {/* <Route exact path='/beers'>
                <Beers />
              </Route> 
              <Route  path='/new-beer'>
                <NewBeer />
              </Route>
              <Route  path='/random-beer'>
                <RandomBeer />
              </Route> */}
          </Switch>
        </div>
      )
    }
  

export default App;
