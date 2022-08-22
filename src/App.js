import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/Beers"} element={<Beers />} />
				<Route path={"/BeerDetails/:id"} element={<BeerDetails />} />
			</Routes>
		</div>
	);
}

export default App;
