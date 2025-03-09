import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddBeerPage from './pages/AddBeerPage.jsx';
import AllBeersPage from './pages/AllBeersPage.jsx';
import BeerDetailsPage from './pages/BeerDetailsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import RandomBeerPage from './pages/RandomBeerPage.jsx';
import NavBar from './components/Navbar.jsx'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/beers" element= {<AllBeersPage />} />
        <Route path="/random-beer" element= {<RandomBeerPage />} />
        <Route path="/new-beer" element= {<AddBeerPage />} />
        <Route path="/beers/:beerId" element= {<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
