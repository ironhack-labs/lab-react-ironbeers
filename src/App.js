import { Route, Routes } from "react-router";
import HomePage from "./screens/home/HomePage";
import BeerList from "./screens/beer-list/BeerList";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
      </Routes>
    </div>
  );
}

export default App;
