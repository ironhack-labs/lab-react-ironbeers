import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/new-beer" element={<NewBeer />} />
<Route path="/random-beer" element={<RandomBeer />} />


</Routes>


</BrowserRouter>
    </div>
  );
}

export default App;
