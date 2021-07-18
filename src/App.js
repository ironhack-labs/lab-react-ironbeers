import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import BeerDetail from './components/BeerDetail';
import NewBeer from './components/NewBeer';

class App extends React.Component {
	render() {
		return (
		  <div className='App' >
			<Navbar />
			<Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/beers" component={BeersList} />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/:_id" component={BeerDetail} />
              <Route exact path="/beers/newbeer" component={NewBeer} />
            </Switch>
		  </div>
		);
	}
}
	
export default App;
