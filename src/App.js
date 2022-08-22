import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Beers from "./pages/Beers";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Beers></Beers>
		</div>
	);
}

export default App;
