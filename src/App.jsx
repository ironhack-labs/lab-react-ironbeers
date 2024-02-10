import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar>
    <img src="./src/assets/home-icon.png" alt="home icon" />
    </Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/beers" element={<AllBeersPage></AllBeersPage>}></Route>
        <Route
          path="/random-beer"
          element={<RandomBeerPage></RandomBeerPage>}
        ></Route>
        <Route path="/new-beer" element={<AddBeerPage></AddBeerPage>}></Route>
        <Route
          path="/beers/:beerId"
          element={<BeerDetailsPage></BeerDetailsPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
