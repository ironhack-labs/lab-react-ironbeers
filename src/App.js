/** @format */
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import CreateBeer from "./components/CreateBeer";
import Search from "./components/Search";

function App() {
	const [beers, setBeers] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		getBeersFromApi();
	}, []);

	const getBeersFromApi = () => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers`)
			.then((response) => {
				// console.log(response.data);
				setBeers(response.data);
			})
			.catch((e) => console.log(e));
	};
	const filteredBeers = beers.filter((beer) => {
		return beer.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className="App">
			<NavBar beers={beers} />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/beers"
					element={
						<div>
							<Header />
							<Search search={search} setSearch={setSearch} />
							<BeersList beers={filteredBeers} />
						</div>
					}
				/>
				<Route
					path="/beers/:id"
					element={
						<div>
							<Header />
							<BeerDetails />
						</div>
					}
				/>
				<Route
					path="/new"
					element={
						<div>
							<Header />
							<CreateBeer />
						</div>
					}
				/>
				<Route
					path="/beers/:id"
					element={
						<div>
							<Header />
							<BeerDetails />
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
