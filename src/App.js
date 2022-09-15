import { Route, Routes } from "react-router";
import HomePage from "./screens/home/HomePage";
import BeerList from "./screens/beer-list/BeerList";
import DetailPage from "./screens/detail-page/DetailPage";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<DetailPage />}/>
      </Routes>
    </div>
  );
}

export default App;
