import { Routes, Route } from 'react-router-dom';
import Navbar from './componnents/Navbar';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import Beer from './pages/Beer';
import Random from './pages/Random';
import NewBeer from './pages/NewBeer';



import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<HomePage />}/>
        <Route path="/beers" element= {<Beers />}/>
        <Route path="/beers/:id" element= {<Beer />}/>  
        <Route path="/random-beer" element= {<Random />}/>  
        <Route path="/new-beer" element= {<NewBeer />}/> 
      </Routes>
    </div>
  );
}

export default App;
