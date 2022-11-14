import { json, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import beersImg from "./assets/beers.png";
import randomBeersImg from "./assets/new-beer.png";
import newBeersImg from "./assets/random-beer.png";
import { Layout } from "./components/Layout";
import { BeerList } from "./components/BeerList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home {...{ beersImg, newBeersImg, randomBeersImg }} />} />
        <Route element={<Layout />}>
          <Route
            path="beer-list"
            element={<BeerList />}
            loader={async () => {
              const getBeers = await fetch("https://ih-beers-api2.herokuapp.com/beers/");
              return getBeers;
            }}
          />
          <Route path="random-beer"></Route>
          <Route path="new-beer"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
