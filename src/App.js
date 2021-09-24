import React from 'react';
//Components
import Home from './components/Home.js';
import Beers from './components/Beers.js';
//React router dom
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//Assets

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/beers" component={Beers} />
					{/* <Route path="/new-beer" component={BeerForm} />
					<Route path="/:id" component={SingleBeer} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
