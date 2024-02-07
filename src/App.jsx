import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
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
        >
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// https://ih-beers-api2.herokuapp.com/beers
// GET / all the beers
// GET /:id one beer
// GET /random beer
// POST /new
// GET /search?q={query}
