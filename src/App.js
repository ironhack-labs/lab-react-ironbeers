// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homepage';
import RandomBeer from './pages/randomBeer';
import NewBeer from './pages/newBeer';

function App() {
  return (
    
    <div className="App">

      {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />
      {/* <HomePage /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
