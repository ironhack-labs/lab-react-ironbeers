import { Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Beers from './pages/Beers'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
     
    </div>
  );
}

export default App;
