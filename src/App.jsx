import './App.css';
import AllBeersPage from './components/BeerPages/AllBeersPage';
import NewBeerPage from './components/BeerPages/NewBeerPage';
import RandomBeerPage from './components/BeerPages/RandomBeerPage';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (

    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>




    </div>
  );
}

export default App;
