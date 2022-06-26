import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllBeers from "./Pages/AllBeers";
import HomePage from "./Pages/HomePage";
import New from "./Pages/New";
import Random from "./Pages/Random";
import BeerDetails from "./Pages/BeerDetails";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allbeers" element={<AllBeers />} />
        <Route path="/random" element={<Random />} />
        <Route path="/new" element={<New />} />
        <Route path='/allbeers/:id' element={<BeerDetails />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
