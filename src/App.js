import React from 'react';
import HomePage from './components/page/HomePage'
import AllBeers from './components/page/AllBeers'
import NewBeer from './components/page/NewBeer'
import RandomBeer from './components/page/RandomBeer'
import DetailsBeer from './components/page/DetailsBeer'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {



  return (
    <div className="App">

    <Switch>

              <Route path="/" exact render={() => <HomePage />}></Route>
              <Route path="/beers" exact render={() => <AllBeers />}></Route>
              <Route path="/random-beers" render={(props) => <RandomBeer {...props}/>}></Route>
              <Route path="/new-beer" render={<NewBeer />}></Route>
              <Route path="/:id" render={(props) => <DetailsBeer {...props}/>}></Route>
    </Switch>
    </div>
  );
}

export default App;
