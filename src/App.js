import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

function App() {
  return (
		<div className="App">
			<nav >
				<ul>
          <Link to="/">Home</Link>
            <Link to="/Beers">Beers</Link>
              <Link to="/RandomBeer">Random Beer</Link>
                <Link to="/NewBeer">New Beer</Link>
                
				</ul>
			</nav>
          <Switch>
            <Route exact path="/Beers" component={Beers} />
              <Route exact path="/RandomBeer" component={RandomBeer} />
                <Route exact path="/NewBeer" component={NewBeer} />
                  <Route exact path="/beer/:beerId" component={BeerDetails} />
                    <Route exact path="/" component={Home} />
          </Switch>
		</div>
	);
}

export default App;
