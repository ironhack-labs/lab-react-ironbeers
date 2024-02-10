import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes} from "react-router-dom";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage"
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-beers" element={<AllBeersPage />} />
        <Route path="/all-beers/:_id" element={<BeerDetailsPage />} />
        <Route path="/new-beers" element={<AddBeerPage />} />
        <Route path="/random-beers" element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
