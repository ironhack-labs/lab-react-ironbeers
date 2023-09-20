import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetails from "./pages/BeerDetails";
import BeersPage from "./pages/BeersPage";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
