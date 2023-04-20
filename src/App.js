
import './App.css';
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/beers" element={<AllBeersPage />}/>
          <Route path="/random-beer" element={<RandomBeerPage />}/>
          <Route path="/new-beer" element={<NewBeerPage />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
