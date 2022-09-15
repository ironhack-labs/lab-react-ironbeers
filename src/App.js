import { Route, Routes } from "react-router";
import HomePage from "./screens/home/HomePage";
import BeerList from "./screens/beer-list/BeerList";
import DetailPage from "./screens/detail-page/DetailPage";
import RandomBeer from "./screens/random-beer/RandomBeer";
import FormNewBeer from "./screens/form-new-beer/FormNewBeer";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<DetailPage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<FormNewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
