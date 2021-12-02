import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route, Switch} from 'react-router-dom';
import ListBeers from './components/ListBeers/ListBeers';

function App() {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route path="/" exact render={() => <Home />} />
					<Route path="/beers" render={() => <ListBeers />} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
