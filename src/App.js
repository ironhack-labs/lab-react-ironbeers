import Home from "./pages/Home";
import Beers from "./pages/Beers";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={() => {}} />
        <Route path="/new-beer" element={() => {}} />
      </Routes>
    </div>
  );
}

export default App;
