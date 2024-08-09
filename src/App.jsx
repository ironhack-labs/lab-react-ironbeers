import "./App.css";
import HomePage from "../src/pages/HomePage.jsx";
import RandomBeerPage from "../src/pages/RandomBeerPage.jsx";
import AddBeerPage from "../src/pages/AddBeerPage.jsx";
import BeerDetailsPage from "../src/pages/BeerDetailsPage.jsx";
import Navbar from "../src/components/Navbar.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllBeersPage from "./pages/AllBeersPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
