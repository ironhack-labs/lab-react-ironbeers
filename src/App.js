import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RandomBeer from "./pages/RandomBeer";
import Beers from "./pages/Beers"
import NewBeer from "./pages/NewBeer";
import HomeBar from "./components/HomeBar";

function App() {
  return (
    <div className="App bg-gray-900 text-white h-screen overflow-y-hidden">

      <HomeBar />

      <Routes>

        <Route path="/home?" element={<HomePage />} />

        <Route path="/beers" element={<Beers />} />

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />

      </Routes>

    </div>
  );
}

export default App;
