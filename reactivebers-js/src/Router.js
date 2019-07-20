import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BeerList from "./components/BeerList";
import BeerDetail from "./components/BeerDetail";
import BeerNew from "./components/BeerNew";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/beers" component={BeerList} />
				<Route exact path="/beer/:idBeer" component={BeerDetail} />
				<Route exact path="/random-beer" component={BeerDetail} />
				<Route exact path="/new-beer" component={BeerNew} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;