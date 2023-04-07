import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Beers from "./components/beers/Beers";
import NewBeer from "./components/beers/NewBeer";
import RandomBeer from "./components/beers/RandomBeer";
import "./App.css";

const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      {pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<NewBeer />} />
        <Route path="/new-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
};

export default App;
