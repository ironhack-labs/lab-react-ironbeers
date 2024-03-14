import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
	return (
		<div className="App">
			<h1>LAB | React IronBeers</h1>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/beers" element={<AllBeersPage />}></Route>
				<Route path="/random-beer" element={<RandomBeerPage />}></Route>
				<Route path="/new-beer" element={<AddBeerPage />}></Route>
				<Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
				<Route path="*" element={<h3>NOT FOUND</h3>}></Route>
			</Routes>
		</div>
	);
}

export default App;
