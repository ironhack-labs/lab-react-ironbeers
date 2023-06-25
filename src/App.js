import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import BeersList from "./components/BeersList";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //shows header on every view except for '/'
  const location = useLocation();

  if (location.pathname === "/") {
    return <Homepage />;
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
