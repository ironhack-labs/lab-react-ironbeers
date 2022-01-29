import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './components/pages/AllBeers';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<AllBeers />}/>
      </Routes>
    </div>
  );
}

export default App;
