import "./App.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Beers from "./component/Beers";
import RandomBeer from "./component/RandomBeer";
import NewBeer from "./component/NewBeer";
import AppHeader from "./component/AppHeader";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<AppHeader />}>
          <Route path="/beers" element={<Beers />}></Route>
          <Route path="/random-beer" element={<RandomBeer />}></Route>
          <Route path="/new-beer" element={<NewBeer />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
