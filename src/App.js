
import './App.css';
import HomePage from './components/HomePage';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
   
    <div>
  <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<Beer/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        
      </Routes>
    </div>
  
    );
}

export default App;
