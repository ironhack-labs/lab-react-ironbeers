
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import { Home } from "../../views/Home";
import { AllBeers } from "../../views/AllBeers";
import { RandomBeer } from "../../views/RandomBeer";
import { Beer } from "../../views/Beer";

const App = () => {



	return (
		<div className="App">
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/beers" element={<AllBeers />} />
				<Route path="/beers/:_id" element={<Beer />} />
				<Route path="/random-beer" element={<RandomBeer />} />
				<Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
		</div>
	);
};

export default App;
