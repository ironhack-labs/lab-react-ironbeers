import './App.css';

import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Routes>
    </div>
  );
}

export default App;
