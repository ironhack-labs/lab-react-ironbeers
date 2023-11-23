import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import AddBeerPage from "./pages/AddBeerPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
