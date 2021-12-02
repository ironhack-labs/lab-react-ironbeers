import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route, Switch} from 'react-router-dom';
import ListBeers from './components/ListBeers/ListBeers';
import OneBeer from './components/OneBeer/OneBeer';

function App() {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route path="/" exact render={() => <Home />} />
					<Route path="/beers" exact render={() => <ListBeers />} />
					<Route path="/beers/:id" render={(props) => <OneBeer {...props} />} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
