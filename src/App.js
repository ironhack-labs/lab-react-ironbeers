import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import BeerScreen from "./screens/BeerScreen/BeerScreen";
import DetailScreen from "./screens/DetailScreen/DetailScreen";
import NewBeerScreen from "./screens/NewBeerScreen/NewBeerScreen"

function App() {
	return (
		<div className="App">
			<Navbar />
			
      <div className="Routes">
				<Routes>
					<Route path="/" element={<HomeScreen/>} />
          <Route path="/beers" element={<BeerScreen/>} />
          <Route path="/random-beer" element={<DetailScreen/>} />
          <Route path="/beers/:id" element={<DetailScreen/>} />
          <Route path="/beers/new" element={<NewBeerScreen/>} />
				</Routes>
			</div>

		</div>
	);
}

export default App;

