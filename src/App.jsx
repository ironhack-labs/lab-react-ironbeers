import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import RandomBeerPage from "./pages/RandomBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import AllBeerPage from "./pages/AllBeersPage"
import AddBeerPage from "./pages/AddBeerPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeerPage/>}/>
        <Route path="/random-beer" element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path = "beers/:beerId" element={<BeerDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
