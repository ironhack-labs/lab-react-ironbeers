//lab-ironbeers
import React  from 'react';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Beers from './components/Beers';
import rbeer from './components/random-beer';
import Nbeer from './components/new-beer';
import BeerDetails from './components/Beer-details';



function App() {
  return (
    <Route>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:beerId" component={BeerDetails} />
          <Route path="/random-beer" component={rbeer} />
          <Route path="/new-beer" component={Nbeer} />
        </Switch>
      </div>
    </Route>
  );
}


export default App;
