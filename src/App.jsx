import "./App.css";
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerHomePage from "./pages/BeerHomePage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/beers/*" element={<BeerHomePage />}/>
        <Route exact path="/random-beer" element={<RandomBeerPage />}/>
        <Route exact path="/new-beer" element={<AddBeerPage />}/>
      </Routes>
    </div>
  );
}

export default App;
