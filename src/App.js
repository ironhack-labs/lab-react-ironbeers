import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homePage';
import RandomBeer from './pages/randomBeer';
import NewBeer from './pages/newBeer';

function App() {
  return (
    
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;