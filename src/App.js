import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeersList from './components/BeersList';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/beers' element={<BeersList />}/>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
