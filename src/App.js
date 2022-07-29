import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BeersList from './components/BeersList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/beers" element={<BeersList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
