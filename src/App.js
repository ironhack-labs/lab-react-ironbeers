import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ListBeersPage from "./pages/ListBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="" element={<Layout />}>
            <Route path="beers" element={<ListBeersPage />}></Route>
            <Route path="beers/:id" element={<SingleBeerPage />} />
            <Route path="random-beer" element={<RandomBeerPage />} />
            <Route path="new-beer" element={<NewBeerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
