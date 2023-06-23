/** @format */
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/all"
					element={
						<div>
							<Header />
							<HomePage />
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
