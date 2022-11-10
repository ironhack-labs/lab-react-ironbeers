import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import BeersList from "./components/BeersList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<BeersList />} />
      </Routes>
    </div>
  );
}

export default App;
