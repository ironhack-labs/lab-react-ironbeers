import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/all-beers" element={<AllBeers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
