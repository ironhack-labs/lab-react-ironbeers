import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beers from "./component/Beers";
import RandomBeer from "./component/RandomBeer";
import NewBeer from "./component/NewBeer";
import AppHeader from "./component/AppHeader";

function App() {
  return (
    <div className="App">
      <header header={AppHeader}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/beers" element={<Beers />}></Route>
            <Route path="/random-beer" element={<RandomBeer />}></Route>
            <Route path="/new-beer" element={<NewBeer />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
