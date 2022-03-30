import './App.css';
import HomePage from './components/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import BeerList from './components/BeerList/BeerList'

// info para usar react-router-dom https://v5.reactrouter.com/web/guides/quick-start
//No se si es buena practica pero he puesto Navbar fuera de routes de esta manera siempre sera visible, presupongo que
//con el footer pasara igual

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/beers" element={ <BeerList/> }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
