import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ListOfBeers from "./components/ListOfBeers";
import SingleBeer from "./components/SingleBeer";

function App() {
  const isHomePage = useLocation();
  console.log(isHomePage);

  return (
    <div className="App">
      {isHomePage.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListOfBeers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
