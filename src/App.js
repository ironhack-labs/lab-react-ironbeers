/** @format */
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/all" element={<HomePage />} />
				<Route path="/random" element={<HomePage />} />
				<Route path="/new" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
