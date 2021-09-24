import React from 'react';
//Components
import Home from './components/Home.js';
import Beers from './components/Beers.js';
import SingleBeer from './components/SingleBeer.js';
import NewBeer from './components/NewBeer.js';
//React router dom
import { Switch, Route } from 'react-router-dom';
//Assets

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/beers" component={Beers} />
				<Route path="/new-beer" component={NewBeer} />
				<Route path="/beer/:id" component={SingleBeer} />
			</Switch>
		</div>
	);
}

export default App;
