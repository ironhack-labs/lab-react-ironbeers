import { Route, Routes } from "react-router-dom";
import { HomeScreen, BeerList, NewBeer, RandomBeer, BeerDetailScreen, ErrorPage } from "./screens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
        <Route path="/beers/:id" element={<BeerDetailScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
