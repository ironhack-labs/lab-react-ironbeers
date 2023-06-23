/** @format */
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import BeersList from "./components/BeersList";

function App() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		getBeersFromApi();
	}, []);

	const getBeersFromApi = () => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers`)
			.then((response) => {
				console.log(response.data);
				setBeers(response.data);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/beers"
					element={
						<div>
							<Header />
							<BeersList beers={beers} />
						</div>
					}
				/>
				<Route
					path="/random"
					element={
						<div>
							<Header />
							<HomePage />
						</div>
					}
				/>
				<Route
					path="/new"
					element={
						<div>
							<Header />
							<HomePage />
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
