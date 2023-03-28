import { Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Beer from './pages/Beer';
import AllBeer from './pages/AllBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer" element={<AllBeer />} />
      </Routes>
     
    </div>
  );
}

export default App;
