import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ListBeersPage from './pages/ListBeersPage/ListBeersPage';
import SingleBeerPage from './pages/SingleBeerPage/SingleBeerPage';
import NewBeerPage from './pages/NewBeerPage/NewBeerPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/beers' component={ListBeersPage}/>
        {/* <Route exact path='/random-beer' component={SingleBeerPage}/> */}
        <Route exact path='/new-beer' component={NewBeerPage}/>
        <Route exact path='/:id' component={SingleBeerPage} />
      </Switch>
    </div>
  );
}

export default App;
