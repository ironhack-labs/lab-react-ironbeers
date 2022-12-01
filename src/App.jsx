import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import BeersPage from "./components/BeersPage/BeersPage";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import NewBeer from "./components/NewBeer/NewBeer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route element={<HomePage />} path="/" />
				<Route element={<BeersPage />} path="/beers" />
				<Route element={<BeerDetails />} path="/beers/:beerId" />
				<Route element={<RandomBeer />} path="/random-beer" />
				<Route element={<NewBeer />} path="/new-beer" />
			</Routes>
		</div>
	);
}

export default App;
